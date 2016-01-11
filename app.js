var http=require('http');
var express=require('express');
var mongoose = require('mongoose');   
var mongoClient = require('mongodb').MongooseClient;
var bodyParser = require('body-parser');
var app=express();



//gestion des routes 

var server=http.createServer(app);
var port = process.env.PORT || 8080;


mongoClient.connect('mongodb://localhost:8080/test');
var db=mongoose.connection;

db.on('error',function(err){
   console.log('connection error', err); 
    
});

db.once('open', function () {
console.log('connected.');
});



// data

server.listen(port);
