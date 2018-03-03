var express = require('express');
var app = express();

app.get('/form', function (req, res) {
	res.sendFile( __dirname + "/form.html" );
});

app.get('/display', function (req, res) {
	res.sendFile( __dirname + "/display.html" );
});

app.use(express.static('static'));


var server = app.listen(8080, function () {
	console.log("Listening at port 8080");
});