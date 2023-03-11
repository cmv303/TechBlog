//set Entry model for connecting to database
//responsible for handling data and business logic

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const SignUp = require("./Signup");

class Entry extends Model {}

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    entry_name: {
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
    userId: {
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
    modelName: "Entry",
  }
);

// `sequelize.define` also returns the model
console.log(Entry === sequelize.models.Entry); // true

module.exports = {Entry, SignUp};
