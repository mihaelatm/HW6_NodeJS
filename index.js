import express from "express";
import connection from "./db.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const query = "INSERT INTO products (name, price) VALUES (?, ?)";
  connection.query(query, [name, price], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({
      message: "Product added successfully",
      productId: results.insertId,
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
