require('isomorphic-fetch');

var SAVE_DATA_SUCCESS = "SAVE_DATA_SUCCESS";
var saveDataSuccess = function(data) {
  return {
    type: SAVE_DATA_SUCCESS,
    data: data
  };
};

var DATA_ERROR = "DATA_ERROR";
var dataError = function(error) {
  return {
    type: DATA_ERROR,
    error: error
  };
};

var saveList = function(list) {
  return function(dispatch) {
    var url = 'http://localhost:8080/app';
    return fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({list})
    }).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response.json();
    })
    .then(function(data) {
     console.log("POST DATA: ", data);
     return dispatch(
      saveDataSuccess(data)
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
