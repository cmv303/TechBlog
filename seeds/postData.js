const { Post } = require("../models/Post");

//hardcoded events as example of what it can do dynamically using session, etc

const postdata = [
  {
    user_id: 1,
    user_name: "Camila",
    post_name: "How to route correcly",
    description: "This entry breaks down how routes and controllers work together",
  },
  {
    user_id: 2,
    user_name: "Camila",
    post_name: "Git/hub",
    description: "This entry breaks down how push up to Github from Command-Line",
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
