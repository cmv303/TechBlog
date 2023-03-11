//set blog model for connecting to database
//responsible for handling data and business logic

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const SignUp = require("./Signup");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_name: {
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Blog",
  }
);

// `sequelize.define` also returns the model
console.log(Blog === sequelize.models.Blog); // true

module.exports = Blog;
