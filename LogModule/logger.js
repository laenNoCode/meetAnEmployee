// this was developped in order to translate later the log to a textfile or whatever
function log(message)
{
	console.log(message);
}

function logError(message)
{
	console.logError(message);
}

module.exports.log = log;
module.exports.logError = logError;
