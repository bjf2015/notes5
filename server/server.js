var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Session = require("./Session")
app.use(bodyParser.json());

app.use('/', express.static('build'));

var db = 'mongodb://localhost:27017/Sessions';
mongoose.connect(db);

app.get("/app", function(req, res) {
	Session.find({})
		   .exec(function(err, myCollection) {
				if (err) {
					console.log("Error has occured");
				} else {
					res.json(myCollection);
				}
			});
});

// app.post('/app', function(req, res) {
//   Session.insert(req.body, function(err, myCollection){
//     res.json(myColletion);
//   })
// })


app.listen(8080, function () {
  console.log('Listening at 8080!');
});
