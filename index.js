var express = require("express");
var app = express();
logger = require("morgan");
app.use(logger());

app.get("/", function (request, response) {
  response.send("Hello World!");
});

var port = 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});

var pg = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, //host: "ec2-54-216-185-51.eu-west-1.compute.amazonaws.com",
  //database: "da03vvrv0hhp7l",
  //user: "lmiadzbwcpstsz",
  //password: "f39cae1f7f55cd3cb16010e924eab745533c1eb9568e04f35ee92ea21ae0afa8",
  ssl: { rejectUnauthorized: false },
});
pool.connect();

pool.query("SELECT * FROM testtable", function (err, result) {
  done();
  if (err) return console.error(err);
  console.log(result.rows);
});
