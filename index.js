var http = require('http'); // l'appel d'un bibliothèque qui permet de nous créer un serveur web
var url= require('url');
var querystring = require('querystring');
var express=require('express');
var app=express();




var server=http.createServer(function(req,res){

res.end('HELLo WORD');


});

var port=Number(process.env.PORT || 8080);
server.listen(port);





















/*var nouveauvisiteur = function(req, res) {

 
		  res.writeHead(200,{"Content-Type": "text/plain"});
		  var params = querystring.parse(url.parse(req.url).query);	
		  console.log(params);


		  if('prenom' in params && 'nom' in params){

		  		res.write('vous etre'+params['prenom']+' '+params['nom']);
		  }else{

		  		res.write('vous devez bien avoir un nom et prenom');


		  }
		  //var page=url.parse(req.url).pathname;
		  //console.log(page);
		  //res.end('<strong>Salut tout le monde , merci !</strong>');
		  if(page == '/'){

		   	res.write('bienvenue sur lacceuil');

		   }else if (page == '/index1'){

		   	res.write('bienvenue sur index');

		   }
		
	res.end('HELLO WORLD');	   
}
   */
//var server = http.createServer(nouveauvisiteur);



//req c'est un object contient tout les informations demandé par le visiteur
//res c'est la reponse  d'un vistieur
// la fonction callback sera applé a chaque fois qu'un visiteur se connecte
// pour obtenir le nom de page demander par le visiteur on  utilise parse