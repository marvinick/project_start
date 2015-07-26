var fs = require ('fs');

function view (templateName, values, response) {
  //read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');

  //insert values in to the content

  //write out to the response
  response.write(fileContents);
}

module.exports.view = view;