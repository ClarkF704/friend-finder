var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');

var app = express();

// dec of port
var port = process.env.PORT || 3000;
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);

//listen to port
app.listen(port, function() {
  console.log("Listening on port " + port)
});

