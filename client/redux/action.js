require('isomorphic-fetch');

var SAVE_DATA_SUCCESS = "SAVE_DATA_SUCCESS";
var saveDataSuccess = function(primary, secondary, source, concept, effectiveness, date, starttime, endtime, duration) {
  return {
    type: SAVE_DATA_SUCCESS,
    primary: primary,
  	secondary: secondary,
	source: source, 
	concept: concept,
  	effectiveness: effectiveness,
  	date: date,  	
  	starttime: starttime,
  	endtime: endtime,
  	duration: duration
  };
};

var DATA_ERROR = "DATA_ERROR";
var dataError = function(error) {
  return {
    type: DATA_ERROR,
    error: error
  };
};

var saveList = function(primary, secondary, source, concept, effectiveness, date, starttime, endtime, duration) {
  return function(dispatch) {
    var url = 'http://localhost:8080/app';
    return fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
	    primary: primary,
	  	secondary: secondary,
		source: source, 
		concept: concept,
	  	effectiveness: effectiveness,
	  	date: date,  	
	  	starttime: starttime,
	  	endtime: endtime,
	  	duration: duration
      })
    }).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response.json();
    })
    .then(function() {
     console.log("POST DATA: ", primary, secondary, source, concept, effectiveness, date, starttime, endtime, duration);
     return dispatch(
      saveDataSuccess(primary, secondary, source, concept, effectiveness, date, starttime, endtime, duration)
      );
   })
    .catch(function(error) {
      return dispatch(
        dataError(error)
        );
    });
  };
};

exports.saveList = saveList;
exports.SAVE_DATA_SUCCESS = SAVE_DATA_SUCCESS;
exports.saveDataSuccess = saveDataSuccess;
exports.dataError = dataError;
