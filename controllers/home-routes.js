//dependencies and models

const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// GET all posts and render to homepage
router.get("/", async (req, res) => {
  console.log("Am I inside the GET?");
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET single post and render to post page
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("/post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login form
router.get("/login", (req, res) => {
  console.log("Am I inside the GET login?");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// GET signup form
router.get("/signup", (req, res) => {
  console.log("Am I inside the GET signup?");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// GET logout access
router.get("/logout", (req, res) => {
  console.log("Am I inside the GET logout?");
  res.render("logout");
});

//export module
module.exports = router;
