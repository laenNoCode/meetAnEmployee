//again, this is for modularity (and stability) of the code.
//if a part fail, it will be easier to change without changing everything
//unit testing is life :D

// ** includes ** //
var fs = require("fs");
var logger  = require("./../../LogModule/logger.js");

// ** functions ** //
function sendFile(url,response)
{
	logger.log(url);
	//adapts the fileName to look for it in the good folder
	adaptContentTypeAndFileName(url, (fileName, contentType) =>
	{
		fs.readFile(fileName,(err,data) => 
		{
			if(err)		
			{
				response.writeHead(404,{ "Content-type" : "text/html; charset=utf-8"});	
				
				fs.readFile(("../html/404.html"),
				 (err2,data2) =>
				  {
					if(err2)
					{
						logger.log(err2);
						response.end("error");
					}
					else
						response.end(data2);
				  });
				logger.log(err);
			}
			else
			{
				response.writeHead(200,
				{
					"Content-type" : contentType + ";charset=utf-8"
				});
				response.end(data);
			}
		});
	});
}

function adaptContentTypeAndFileName(url, callback)
{
	url = url.toLowerCase();
	if(url.endsWith(".html"))
		callback("../html" + url, "text/html");
	else if(url.endsWith(".htm"))
		callback("../html" + url + "l", "text/html");
	else if(url.endsWith(".css"))
		callback("../css" + url, "text/css");
	else if(url.endsWith(".jpg"))
		callback("../images/jpg" + url, "img/png");
	else if(url.endsWith("favicon.ico"))
		callback("../images/favicon/favicon.png","img/png");
}

// ** module exporting ** //
module.exports.sendFile = sendFile;
