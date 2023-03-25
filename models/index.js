const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

//Post to User: A Post belongs to one User (user_id foreign key).
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//Post to Comment: A Post has many Comments (post_id foreign key).
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

//User to Post: A User has many Posts (user_id foreign key).
User.hasMany(Post, {
  foreignKey: "user_id",
});

//User to Comment: A User has many Comments (user_id foreign key).
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//Comment to Post: A Comment belongs to one Post (post_id foreign key).
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

//Comment to User: A Comment belongs to one User (user_id foreign key).
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Post, User, Comment };
