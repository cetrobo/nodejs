var http=require('http');
var express=require('express');
var jade=require('jade');
var app=express();

//gestion des routes

var server=http.createServer(app);

app.set('view engine','jade');

app.get('/', function (req, res) {
	 //res.setHeader('Content-Type', 'text/plain');
	 res.render('index',{title:'homepage'});
 })

.get('/produit/:numproduit/fromage',function(req,res){
	 //res.setHeader('Content-Type', 'text/plain');
	 //res.end('vous etre dans le numero'+ req.params.numproduit);
	 res.render('index',{numproduit:req.params.numproduit})
})


/*.use(function(req,res,next){

 	 res.send('404','page introuvable');
})*/





server.listen(8080);

