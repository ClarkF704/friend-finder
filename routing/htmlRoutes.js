var path = require('path');
module.exports = function(app) {
    //default route
    app.use(function (req, res) {
		res.render("home");
	});
    
    
    // survey route
    app.get('/survey', function (req, res) {
        res.render("survey");
    });
}