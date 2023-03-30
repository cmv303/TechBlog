const { Post } = require("../models");

//hardcoded events as example of what it can do dynamically using session, etc

const postdata = [
  {
    post_name: "How to route correctly",
    description:
      "This entry breaks down how routes and controllers work together",
      user_id: 1
  },
  {
    post_name: "Git/hub",
    description:
      "This entry breaks down how push up to Github from Command-Line",
      user_id: 1
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
