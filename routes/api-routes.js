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

};

