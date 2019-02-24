var path = require('path');
module.exports = function(app) {
    //default route
    app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '../public/home.html'));
	});
    
    
    // survey route
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/survey.html'));
    });
}