exports.DATABASE_URL = process.env.DATABASE_URL ||
	global.DATABASE_URL ||
	(process.env.NODE_ENV === 'production' ?
		'mongodb://localhost:27017/space-repetition' :
		'mongodb://localhost:27017/space-repetition-dev');
exports.PORT = process.env.PORT || 3000;
