var path = require('path');
module.exports = function(app) {
    //default route
    app.get("/",function (req, res) {
		res.render("index");
	});
    
    
    // survey route
    app.get('/survey', function (req, res) {
        res.render("survey");
    });
}