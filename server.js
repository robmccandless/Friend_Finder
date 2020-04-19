/*
    Robert McCandless
    University of Denver
    Full Stack Developer
    */

//requires
var express = reqiore('express');
var bodyParser = reqiore('body-[arser');
var cors = require('cors');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

//middleware use
app.use(cors()); // saves from having to do access-control-allow-origin
app.use(bodyParser.json());

//importing routes
require('./app/routing/apiRoutes')(app);
require('.app/routing/htmlRoutes')(app, path);

app.listen(PORT, () => {

    console.log('connected on prot: $(PORT)');
});