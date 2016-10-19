var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'HJpr3MR9jcAAAAAAAAABtrOqB3rnpgxqkwMCTp-0Pe4XwWNnKYRBFJtMNUuv4M3p' });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
