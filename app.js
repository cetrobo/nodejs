var http=require('http');
var express=require('express');
var jade=require('jade');
var app=express();
//data

var data=[
    {
      id:1,
      nom:'achraf'
    },
    
    {
      id:2,
      nom:'hamza'
    }
]

//gestion des routes 

var server=http.createServer(app);
var port = process.env.PORT || 8080;
app.set('view engine','jade');
app.use("/stylesheets",express.static(__dirname + "/stylesheets"));
app.use("/script",express.static(__dirname + "/script"));
//get c'est elle qui va permettre à notre serveur de répondre aux requêtes HTTP
// nous utilisons la méthode static de l'object express
app.use("/img",express.static(__dirname+"/img"));
app.use("/font",express.static(__dirname+"/font"));
app.use("/views",express.static(__dirname+"/views"));




app.get('/',function(req,res){
   
    res.json(data);
    
    
});


server.listen(port);
// data

