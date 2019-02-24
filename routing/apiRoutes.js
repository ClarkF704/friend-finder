var friendz = require('../app/data/friends');
module.exports = function(app) {
    //
    app.get('/api/friends', function (req,res){
        res.JSON(friendz)
        
    });
    // When the user submits
    app.post('/api/friends', function(req,res){
        // user says
        var subject = req.body
        
    });
}