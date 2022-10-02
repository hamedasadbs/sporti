//declare back-end libraries
var mysql = require("mysql");
var express = require("express");
var app = express();
var cors = require("cors");

const bodyParser = require("body-parser");

var category = require("./category");

var products = require("./products");

var user = require("./user");

var learningInfo = require("./learningInfo");

var generalSkills = require("./generalSkills");

var like = require("./like");

var interests = require("./interests");

var projects = require("./projects");

var preview = require("./preview");

var technology = require("./technology");
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
//send data for authentication
user.getUser(app, con);
//send data for authentication
user.addUser(app, con);
//send data to personal_info page
category.getData(app, con);
//send data to leaning info page
learningInfo.getData(app, con);
//add data to leaning_info page
learningInfo.addData(app, con);
//remove data from leaning info page
learningInfo.removeData(app, con);
//send data to education info page
products.getProducts(app, con);
//update education info
products.updateLike(app, con);
//send data to general skills page
generalSkills.getData(app, con);
//add data to general skills page
generalSkills.addData(app, con);
//remove data from general skills page
generalSkills.removeData(app, con);
//send data to skills page
like.getLikes(app, con);
//add data to skills page
like.changeLikes(app, con);
//send data to interests page
interests.getData(app, con);
//add data to interests page
interests.addData(app, con);
//remove data from interests page
interests.removeData(app, con);
//send data to projects page
projects.getData(app, con);
//add data to projects page
projects.addData(app, con);
//remove data from projects page
projects.removeData(app, con);
//send data to preview page
preview.getData(app, con);
//send title to technology page
technology.getTitle(app, con);
//send data to technology page
technology.getTech(app, con);
//add tech title
technology.addTechTitle(app, con);
//remove tech title
technology.removeTechTitle(app, con);
//add tech
technology.addTechnology(app, con);
//remove tech
technology.removeTechnology(app, con);
//listen to port 8080 where database is in
app.listen(8080);
