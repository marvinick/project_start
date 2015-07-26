//Handle HTTP route GET / and POST / i.e Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/" ) {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
  }
  //if url == '/' && POST
    //redirect tp /:username
}


//Handle HTTP route POST / i.e chalkers
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", " ");
  if(username.length > 0 ) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write(username + "\n");
    response.end('Footer\n');
  }
}

module.exports.home = home;
module.exports.user = user;