//declare back-end libraries
var mysql = require("mysql");
var express = require("express");
var app = express();
var cors = require("cors");

const bodyParser = require("body-parser");

var category = require("./category");

var products = require("./products");

var user = require("./user");

var like = require("./like");

var cart = require("./cart");

var type = require("./type");

//use cors lib for disable cors error
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//for parse body of request
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
//connect to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fantasima",
});
//check connection
con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

user.getUser(app, con);
user.addUser(app, con);

category.getData(app, con);

products.getProducts(app, con);

like.getLikes(app, con);
like.changeLikes(app, con);

cart.getCart(app, con);
cart.increaseCart(app, con);
cart.decreaseCart(app, con);
cart.deleteCart(app, con);

type.getType(app, con);

//setting port
app.listen(8080);
