var http=require('http');
var express=require('express');
var jade=require('jade');
var app=express();

 //var less = require('less');


//gestion des routes 

var server=http.createServer(app);
var port = process.env.PORT || 8080;
app.set('view engine','jade');


app.use("/stylesheets",express.static(__dirname + "/stylesheets"));
//get c'est elle qui va permettre à notre serveur de répondre aux requêtes HTTP
// nous utilisons la méthode static de l'object express
app.use("/img",express.static(__dirname+"/img"));
app.use("/font",express.static(__dirname+"/font"));


app.get('/',function(req,res){
	
	res.render('index');
	
});





/*
.get('/produit/:numproduit/fromage',function(req,res){
	 //res.setHeader('Content-Type', 'text/plain');
	 //res.end('vous etre dans le numero'+ req.params.numproduit);
	 res.render('index',{numproduit:req.params.numproduit})
})


/*.use(function(req,res,next){
    
 	 res.send('404','page introuvable');
})*/

server.listen(port);

