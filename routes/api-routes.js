//this file offers a set of routes for displaying and saving data to the db

//Dependancies
var Sequelizedburger = require("../models/burger.js");
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var Sequelize = require("sequelize");

// Routes

module.exports = function(app) {

  // Get all burgers
  app.get("/api/all", function(req, res) {

  	Sequelizedburger.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.render("index", { burgers: data });
    });

  });

};

