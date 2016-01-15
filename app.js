var http=require('http');
var express=require('express');
var mongoose = require('mongoose');   
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app=express();



//gestion des routes 

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.methodOverride());
var server=http.createServer(app);
var port = process.env.PORT || 27017;

mongoose.connect('mongodb://127.0.0.1:27017/matest');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
  
});

var mySchema = new mongoose.Schema({
	_id    : String,
	name: String,
	age   : Number
});
var user = mongoose.model('emp', mySchema);
server.listen(port);
