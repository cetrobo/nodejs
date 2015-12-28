var http=require('http');
var express=require('express');
var jade=require('jade');
var app=express();


var server=http.createServer(app);


app.get('/', function (req, res) {

  res.render('index');
});


	

server.listen(8080);

