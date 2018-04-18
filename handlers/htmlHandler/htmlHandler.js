//again, this is for modularity (and stability) of the code.
//if a part fail, it will be easier to change without changing everything
//unit testing is life :D

// ** includes ** //
var fs = require("fs");
var logger  = require("./../../LogModule/logger.js");

// ** functions ** //
function sendHTML(fileName,response)
{
	fs.readFile(fileName,(err,data) => 
	{
		if(err)		
			logger.logError(err);
		else
		{
			response.writeHead(200,
			{
				"Content-type" : "text/html; charset=utf-8"
			});
			response.end(data);
		}
	});
}

// ** module exporting ** //
module.exports.sendHTML = sendHTML;
