// Properties will be defined on each User instance that is created. 
// So the values will be different for each user.
function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}
 
// We define all of our methods (that will be inherited by all the User instances) in this object. 
// n JavaScript, you add methods and properties on the prototype property when you want instances 
// of an object to inherit those methods and properties.
// By overwriting the prototype with a new object literal we have all the methods organized in one place, 
// and you can better see the encapsulation that we are after.
User.prototype = {
    // Constructor Property property points to the constructor of the function.
    // The one disadvantage of overwriting the prototype is that the constructor property no 
    // longer points to the prototype, so we have to set it manually
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

// A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);  
console.log(firstUser.showNameAndScores()); //Richard Scores: 15,10​ 

// Another User​
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
console.log(secondUser.showNameAndScores()); //Peter Scores: 18