#!/usr/bin/nodemon

var express = require('express'),
app = module.exports = express.createServer(),
routes = require('./routes'),
arDrone = require('ar-drone'),
client  = arDrone.createClient();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/takeoff', routes.takeoff);

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
