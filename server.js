var app = require('express');
var path = require('path');
var bodyParser = require("body-parser");
//routes
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);
// dec of port
var port = process.env.PORT || 3000;
//listen to port
app.listen(port);
console.log("Listening on port " + port)
