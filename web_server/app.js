var router = require("./router.js");

//Problem : we need a simple way to look at user's badge count and Javascript point from a web server
//solution: use node.js to perform the profile look ups and server our template via HTTP

//1. Create a web server

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log("Server running at http://<web_server-url>/")
