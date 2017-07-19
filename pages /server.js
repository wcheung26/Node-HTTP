// Dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  var urlParse = url.parse(req.url);
  switch (urlParse.pathname){
    case "/": 
      displayHome(urlParse.pathname, req, res);
      break;
    case "/food":
      displayFood(urlParse.pathname, req, res);
      break;
    case "/movies":
      displayMovies(urlParse.pathname, req, res);
      break;
    case "/frameworks":
      displayFrameworks(urlParse.pathname, req, res);
      break;
    default:
      display404(urlParse.pathname, req, res);
  }
}

var displayHome = function(url, req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/home.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

var displayFood = function(url, req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/food.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

var displayMovies = function(url, req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/movies.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

var displayFrameworks = function(url, req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/frameworks.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

var display404 = function(url, req, res) {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("404 not found.");
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


