const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize  = new Sequelize({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'mysql',
    // port: 3306,
});

module.exports = sequelize;