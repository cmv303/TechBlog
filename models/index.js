//Post to User: one to one (one post to one user)
//Post to Comment: one to many (one post can have many comments)
//!unsure
//Post to SignUp: many to many  (many posts to many signups) 

//!unsure
//Comment to Post: many to one (many comments can have one post)
//Comment to User: many to one (many comments belongsto one user)

//User to Comment: hasMany (one user hasMany comments)
//User to Post: one to many (one user to many posts)
//User to SignUp: one to one (one user has one signUp)


const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

Post.hasOne(User, {
    foreignKey: "user_id",
});

// Post.hasMany(Comment, {

// });

// User.hasMany(Post, {

// });

// User.hasMany (Comment, {

// });

// SignUp.belongsTo(User, {
//     foreignKey: "userID",
//     onDelete: 'CASCADE',
// });

// //? Do I need this, if the above block is the same, but reversed?
// User.hasOne(SignUp, {
    
// }); 


// Post.hasMany(SignUp, {

// });



module.exports = {Post, User, Comment};
