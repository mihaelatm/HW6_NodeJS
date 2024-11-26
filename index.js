import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("Hello, World!");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

app.post("/", (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).send("Data is required");
  }
  res.send(`Received data: ${data}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
