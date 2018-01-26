//this file offers a set of routes for displaying and saving data to the db

//Dependancies
var db = require("../models");
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var Sequelize = require("sequelize");

// Routes

module.exports = function(app) {

  // Get all burgers
  app.get("/", function(req, res) {

  	db.Sequelizedburger.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.render("index", { burgers: results });
    });

  });

  //Creating a new burger
  app.post("/burgers", function(req,res) {

  	db.Sequelizedburger.create({
  		
  		burger_name: req.body.burger_name

  	}).then(function(result) {

  		res.json({ id: result.insertId });

  	});

  });

};

// //Creating a new burger
// app.post("/burgers", function(req, res) {
// 	//Inserting using mysql
// 	connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
// 		if (err) {
// 			//sends server error status code
// 			return res.status(500).end();
// 		}	

// 		//Send back the id of the new burger
// 		res.json({ id: result.insertId });
// 		console.log({ id: result.insertId });
// 	});
// });