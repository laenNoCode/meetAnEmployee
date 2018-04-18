// website for helloworld
// ** includes ** //
var http = require("http");
var logger = require("./../LogModule/logger.js");
var server = http.createServer();
server.on("request",
	(request,response) => 
	{
		logger.log("connection recieved");
		response.writeHead(200, 
			{
				"Content-type" : "text/html; charset = utf-8"
		


			})
		response.end("hello world");
	});
server.listen(8080);
