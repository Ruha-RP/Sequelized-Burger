//This file will create the sequelized model (i.e table in the database)

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


module.exports = function(sequelize, DataTypes) {
	//The model name
	var Sequelizedburger = sequelize.define("Sequelizedburger", {
		//the table columns
		id: {
			type: Sequelize.INTEGER,
			// allowNull: false,
			primaryKey: true,
			auto_increment: true
		},
		burger_name: {
			type: Sequelize.STRING
		},
		devoured: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		}
	});
	return Sequelizedburger;
	//syncs with db
	Sequelizedburger.sync();
};





