//Problem : we need a simpe way to look at user's badge count and JS points
//solution: use node.js to connect to Treehouse's API to get profile information to print out

var profile = require("./profile.js");
var users = process.argv.slice(2);
users.forEach(profile.get);

