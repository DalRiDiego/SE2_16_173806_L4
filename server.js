var http = require('http');
var express = require('express');

var app = express();




app.set('port',(process.env.PORT || 8080)); //ascolta la porta 8080

app.listen(8080,'127.0.0.1');
console.log("Server running on port 8080...");
