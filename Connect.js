var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "market",
});

db.connect(function (error) {
  if (error) throw error;
  console.log("connect");
});

module.exports = db;
