var actions = require("./action");
// var update = require('react-addons-update');

var initialState = [
	{
	primary: "",
  	secondary: "",
	source: "",
	concept: "",
  	effectiveness: "",
  	date: null,  	
  	starttime: "",
  	endtime: "",
  	duration: null
 }

];

var reducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_DATA_SUCCESS) {
		state = Object.assign({}, state, {
				primary: actions.primary,
			  	secondary: actions.secondary,
				source: actions.source, 
				concept: actions.concept,
			  	effectiveness: actions.effectiveness,
			  	date: actions.date,  	
			  	starttime: actions.starttime,
			  	endtime: actions.endtime,
			  	duration: actions.duration
			});
		return state
	}
	if(action.type === actions.DATA_ERROR) {
		return {
			error: action.error
		}
	}

	return state;
}

module.exports = reducer;