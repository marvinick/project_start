//Problem : we need a simpe way to look at user's badge count and JS points
//solution: use node.js to connect to Treehouse's API to get profile information to print out

var http = require("http");
var username = "chalkers";

function printMessage (username, badgeCount, points) {
  var message = username + "has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

function printError(error) {
  console.error(error.message);
};

//connect to the API (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) { console.log(response.statusCode) });

//read the data
response.on('data', function (chunk) {
  body += chunk;
});
response.on('end', function() {
  if(response.statusCode === 200) {
    try {
      var profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript)
    } catch(error) {
      //parse error
      printError(error);
    }
  } else {
    //status error code
    printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
  }
});

//parse the data
//print the data

//connection Error
request.on('error', function(error);