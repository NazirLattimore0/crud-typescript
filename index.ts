import * as http from "http";
import * as mysql from "mysql2";
import * as express from "express";

// use these variables to define our port, hostname
const hostname = "127.0.0.1";
const port = 3001;

const app = express();

// create the details to your mysql database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "August21972",
  database: "classicmodels",
});

// makes the connection happen
db.connect((err) => {
  if (err) {
    console.log("cant connect to database");
    console.log(err);
    return;
  }
  console.log("connection worked");
});

app.listen(port, () => {
  console.log(`Connected to backend on ${hostname}:${port}`);
});

app.get("/", (_req, res) => {
  res.json("Welcome to Classic Models Backend");
});

app.get("/customers", (_req, res) => {
  const ss = "SELECT * FROM customers";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});

app.get("/customers", (_req, res) => {
  const ss = "SELECT phone from customers";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});
