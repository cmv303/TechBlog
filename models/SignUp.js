const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class SignUp extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

SignUp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    entryDate: {
        type: DataTypes.DATETIME(6),
        defaultValue: DataTypes.NOW,
        allowNull: false,
        unique: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SignUp',
  }
);

// `sequelize.define` also returns the model
console.log(SignUp === sequelize.models.SignUp); // true

module.exports = SignUp;
