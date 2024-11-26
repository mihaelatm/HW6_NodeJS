import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  try {
  } catch (error) {}
});

app.post("/", (req, res) => {
  res.send("Post request received");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
