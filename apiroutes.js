
// importing friends
var friends = require("../data/friends");

// get route to display friends


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });





    // post route to handle survey results
    // adding new friend
    app.post("/api/friends", function (req, res) {

        var userInput = req.body;
        console.log(userInput);
        // handle comparison here to find perfect match
        var userResponses = scores.length;
        var matchName = "";
        var matchImage = "";
        var difference = 10000;
       


        //going thru the friends list 
        for (var i = 0; i < friends.length; i++) {

            // going thru the user responses
           var eachDiff = 0;
           console.log(.name);
            for (let x = 0; x < userResponses.length; x++) {
                eachDiff += (Math.abs(friends[i].scores[x]- userResponses[x]));
                
            }
    if (eachDiff < difference){
        difference = eachDiff;
        matchName = friends[i].name;
        matchImage = friends[i].name;

    }

}
friends.push(userInput);




        // send match back to front end
        res.json({
            name: matchName,
            image: matchImage,
            status: "OK"
        })
    })
};