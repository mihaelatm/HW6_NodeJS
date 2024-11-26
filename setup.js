import connection from "./db.js";

const createTable = `
CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
)
`;

connection.query(createTable, (err, results) => {
  if (err) {
    console.log("Error creating table:", err);
    return;
  }
  console.log("Table created successfully");
});

connection.end();
