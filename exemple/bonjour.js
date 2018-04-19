// website for helloworld
// ** includes ** //
var http = require("http");
var logger = require("./../LogModule/logger.js");
var fileRequestHandler = require("./../handlers/fileRequestHandler/fileRequestHandler.js");

// ** main ** //
var server = http.createServer();
server.on("request",
	(request,response) => 
	{
		logger.log("connection recieved " + request.url);
		var url = request.url;
		fileRequestHandler.sendFile(url, response);
	});
server.listen(8080);
