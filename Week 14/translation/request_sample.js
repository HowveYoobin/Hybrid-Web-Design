var request = require("request");

request.get('/books', function(error, response, body) {

});


request.post('/books', { body: { key: value } }, function(error, response, body) {

});


request.put('/books', { body: { key: value } }, function(error, response, body) {

});


request.delete('/books', function(error, response, body) {

});