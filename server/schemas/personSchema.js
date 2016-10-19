var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id:  [{type: String, unique: true}],
	Name:  String,
  nickname: String
});

module.exports =User;
