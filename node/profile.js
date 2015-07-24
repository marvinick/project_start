var http = require("http");

function printMessage (username, badgeCount, points) {
  var message = username + "has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

//print out error messages
function printError(error) {
  console.error(error.message);
};

function get() {
  //connect to the API (http://teamtreehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) { console.log(response.statusCode) });

  //read the data
  response.on('data', function (chunk) {
    body += chunk;
  });
  response.on('end', function() {
    if(response.statusCode === 200) {
      try {
        //parse the data
        var profile = JSON.parse(body);
        //print the data
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      } catch(error) {
        //parse error
        printError(error);
      }
    } else {
      //status error code
      printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
    }
  });

  //connection Error
  request.on('error', function(error);
}

module.exports.get = get; //export function get to app.js