var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var content = JSON.stringify(process.env);
	res.send('<h1>Hello World!</h1><br/>' +  content);
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;

app.listen(port, function () {
  console.log("App listening on PORT: " + port + ", started (" + Date() + ")");
});
