//? Is this model necessary?

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Comment extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // user_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: "Comment",
    //     key: "id",
    //   },
    // },
    postDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Comment",
  }
);

// `sequelize.define` also returns the model
console.log(Comment === sequelize.models.Comment); // true

module.exports = Comment;
