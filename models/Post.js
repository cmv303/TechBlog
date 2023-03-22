//set Entry model for connecting to database
//responsible for handling data and business logic

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const SignUp = require("../controllers/api/post-routes");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
);

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true

//!unsure about LoggedIn. also unsure of route on line 6
module.exports = {Post, SignUp};
