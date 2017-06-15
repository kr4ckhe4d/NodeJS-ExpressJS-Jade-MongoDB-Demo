// Init express framework.
var express = require('express');
var path = require('path');

// Setup express.
var app = express();

// where the root (server) is located. Needed when including stylesheets and scripts in jade file.
app.use(express.static(path.join(__dirname, '/')));

// Path to jade views.
// Not required, because /views is the default folder for jade view-files.
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var data = {
    firstName: "Hans",
    lastName: "Jensen",
    age: 24
}

// Index route
app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'The Front Page'
    });
});

// About Me route
app.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'About Me',
        person: data
    });
});

// Init start server function
startServer();

// Start up the server
function startServer() {
    var server = app.listen(8000, function() {
        var port = server.address().port;
        console.log('Listening on port ' + port);
    })
}