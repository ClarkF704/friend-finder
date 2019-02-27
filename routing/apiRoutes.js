var friends = require("../app/data/friends.json");

module.exports = function (app) {
    //
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    });
    // When the user submits
    app.post('/api/friends', function (req, res) {
        var answers = req.body.questionAnswers; //question answers doesnt exist

        console.log(answers);

        var userScores = [];
        var bestMatch = 0;
        // llop through scores
        for (i = 0; i < friends.length; i++) {
            var scoreDifference = 0;

            for (L = 0; L < answers.length; L++) {
                scoreDifference += (Math.abs(parseInt(friends[i].questionAnswers[L] - parseInt(answers))));
            }
            userScores.push(scoreDifference);

        }
        for (var i = 0; i < userScores.length; i++) {
            if (userScores[i] <= userScores[bestMatch]) {
                bestMatch = i;
            }
        }
        var match = friends[bestMatch];
        res.json(match);
        friends.push(req.body);
    });
}