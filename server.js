var http = require("http");

function onRequest(req, res) {
	if (req.url == "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Welcome to the Taxihub homepage!");
	}
	
	// About page
	else if (req.url == "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Welcome to the contact page of Taxihub!");
	}
	
	// 404'd!
	else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("404! Page not found.");
	}
}

http.createServer(onRequest).listen(9000);
console.log("Server has started.");