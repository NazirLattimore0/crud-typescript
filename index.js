exports.__esModule = true;
var http = require("http");
var mysql = require("mysql2");
// import { isBuffer } from "util";
// use these variables to define our port, hostname
var hostname = "127.0.0.1";
var port = 3001;
var express = require("express");

var app = express();

// create the details to your mysql database
var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "August21972",
  database: "classicmodels",
});
// makes the connection happen
db.connect(function (err) {
  if (err) {
    console.log("cant connect to database");
    console.log(err);
    return;
  }
  console.log("connection worked");
});
// conn.query("SELECT * FROM products", function (err, row) {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(row);
//   }
// });

app.listen(3001, function () {
  console.log("Connected to backend!");
});
app.get("/", function (_req, res) {
  res.json("Friday Code challenge");
});
app.get("/customers", function (_req, res) {
  var ss = "SELECT * FROM customers";
  db.query(ss, function (err, data) {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});

app.get("/customers", function (_req, res) {
  var ss = "SELECT phone from customers";
  db.query(ss, function (err, data) {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});
