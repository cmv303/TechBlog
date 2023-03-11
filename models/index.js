//Blog to User: one to many
//User to SignUp: one to one
//Blog to SignUp: many to many


const Blog = require("./User");
const User = require("./User");
const SignUp = require("./SignUp");

SignUp.belongsTo(User, {
    foreignKey: "userID",
    onDelete: 'CASCADE',
});

Blog.hasMany(User, {
    foreignKey: "userId",
});

Blog.hasMany(SignUp, {

});

User.hasOne(SignUp, {
    
});

module.exports = {Blog, User, SignUp};
