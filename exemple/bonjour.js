// website for helloworld
// ** includes ** //
var http = require("http");
var logger = require("./../LogModule/logger.js");
var htmlHandler = require("./../handlers/htmlHandler/htmlHandler.js");


// ** main ** //
var server = http.createServer();
server.on("request",
	(request,response) => 
	{
		logger.log("connection recieved");
		htmlHandler.sendHTML("../html/index.html",response);
	});
server.listen(8080);
