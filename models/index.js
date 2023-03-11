//Entry to User: one to one (one entry to one user)
//User to Entry: one to many (one user to many entries)
//User to SignUp: one to one (one user has one signUp)
//Entry to SignUp: many to many 


const Entry = require("./Entry");
const User = require("./User");
const SignUp = require("./SignUp");

Entry.hasOne(User, {
    foreignKey: "userId",
});

User.hasMany(Entry, {

});

SignUp.belongsTo(User, {
    foreignKey: "userID",
    onDelete: 'CASCADE',
});

//? Do I need this, if the above block is the same, but reversed?
User.hasOne(SignUp, {
    
}); 


Entry.hasMany(SignUp, {

});



module.exports = {Entry, User, SignUp};
