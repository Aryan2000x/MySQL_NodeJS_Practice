require("dotenv").config();
const mysql = require("mysql2");
console.log(process.env.USERNAME);

// const db = mysql.createConnection({
//   user: process.env.USER,
//   host: process.env.HOST,
//   password: process.env.PASS,
//   database: process.env.DATABASE,
//   port: process.env.PORT,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL server:", err);
//     return;
//   }
//   console.log("Connected to MySQL server!");
// });
// const country = {
//   name: "USA",
//   population: 46700000,
// };

// Inserting data into the database table
// db.query(
//   "INSERT INTO countries (countryName, population) VALUES (?, ?)",
//   [country.name, country.population],
//   (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   }
// );

// Showing data form the database table

// db.query("SELECT * FROM countries", (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log(typeof [1, 2, 3, 4, 5, 6]);
// });
