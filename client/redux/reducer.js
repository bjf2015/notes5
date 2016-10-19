var actions = require("./action");
// var update = require('react-addons-update');

var initialState = {
	list:[{
		primary:  String,
	  	secondary: String,
		source: String,
		concept: String,
	  	effectiveness: String,
	  	date: Date,
	  	starttime: String,
	  	endtime: String,
	  	duration: Number
	}]
};

var reducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_DATA_SUCCESS) {
		return {
			list: action.data
		}
	}
	if(action.type === actions.DATA_ERROR) {
		return {
			error: action.error
		}
	}

	return state;
}

module.exports = reducer;