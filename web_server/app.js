//Problem : we need a simple way to look at user's badge count and Javascript point from a web server
//solution: use node.js to perform the profile look ups and server our template via HTTP

//1. Create a web server

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function() {
    response.write(new Date() + "\n" );
  }, 1000);
  response.write('Hola\n');
  //response.end('Hello World!\n');
}).listen(3000);
console.log("Server running at http://<web_server-url>/")
//2.Handle HTTP route GET / and POST / i.e Home
//3.Handle HTTP route POST / i.e chalkers
//4.Function than handles the reading of files and merge in value.