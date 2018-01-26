//============
//DEPENDANCIES
//============

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

//================
//MySQL CONNECTION
//================
var db = require("./models");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "sequelizedburger_db"
});
};

connection.connect(function(err) {
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

//==================
//EXPRESS CONNECTION
//==================

var app = express();
var PORT = process.env.PORT || 8080;

//Listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
	console.log("listening on PORT: ",PORT);
	});
});


//handling data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//==================
//SETTING HANDLEBARS
//==================

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//=======
//ROUTING
//=======

require("./routes/api-routes.js")(app);

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


// //Updating the burger, when devour status changes
// app.post("/devourburger", function(req,res) {
// 	//Updating on mysql
// 	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.body.burgerId], function(err, response) {
// 		res.redirect("/");
// 	});
// });
