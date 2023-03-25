const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

//Post to User: A Post belongs to one User (user_id foreign key).
Post.belongsTo(User, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
    onDelete: "CASCADE",
},
});

//Post to Comment: A Post has many Comments (post_id foreign key).
Post.hasMany(Comment, {
  foreignKey:  {
    name: "post_id",
    allowNull: false,
    onDelete: "CASCADE",
},
});

//User to Post: A User has many Posts (user_id foreign key).
User.hasMany(Post, {
  foreignKey:  {
    name: "user_id",
    allowNull: false,
    onDelete: "CASCADE",
},
});

//User to Comment: A User has many Comments (user_id foreign key).
User.hasMany(Comment, {
  foreignKey:  {
    name: "user_id",
    allowNull: false,
    onDelete: "CASCADE",
},
});

//Comment to Post: A Comment belongs to one Post (post_id foreign key).
Comment.belongsTo(Post, {
  foreignKey:  {
    name: "post_id",
    allowNull: false,
    onDelete: "CASCADE",
},
});

//Comment to User: A Comment belongs to one User (user_id foreign key).
Comment.belongsTo(User, {
  foreignKey:  {
    name: "user_id",
    allowNull: false,
    onDelete: "CASCADE",
},
});

module.exports = { Post, User, Comment };
