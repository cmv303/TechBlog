const { User } = require("../models/User");

//seed data
const userdata = [
  {
    email: "moreiras.camila@gmail.com",
    password: "12345",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
