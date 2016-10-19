var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  _id:  [{type: String, unique: true}],
	primary:  String,
  secondary: String;
	source: String,
	concept: String,
  effectiveness: String,
  date: Date,
  starttime: String,
  endtime: String,
  duration: Integer
	// bucket: { type: String, default: 'z'}
});

var Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
