var mongoose = require('mongoose');

var NotesSchema = new mongoose.Schema({
  id:  [{type: String, unique: true}],
	note:  String,
  topic: String;
	tags: String,
	subject: String,
  rating: String,
	// bucket: { type: String, default: 'z'}
});

var Question = mongoose.model('Notes', NotesSchema);

module.exports = Question;
