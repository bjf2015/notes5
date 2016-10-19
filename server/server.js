var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Session = require("./Session")
app.use(bodyParser.json());

app.use('/', express.static('build'));

var db = 'mongodb://localhost:27017/sessions';
mongoose.connect(db);


app.post('/app', function(req, res, next) {
  Session.create(req.body, function (err, sessions) {
    if (err) return next(err);
    res.json(sessions);
  });
});

app.get("/app", function(req, res) {
	Session.find({})
		   .exec(function(err, sessions) {
				if (err) {
					console.log("Error has occured");
				} else {
					res.json(sessions);
				}
			});
});


app.listen(8080, function () {
  console.log('Listening at 8080!');
});
