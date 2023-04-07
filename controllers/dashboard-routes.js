//dependencies and models
const router = require("express").Router();
const { Post, Comment } = require("../models");
const withAuth = require("../components/auth");

//GET all posts belonging to a user and render to dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [Comment],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts });
  } catch (err) {
    console.log("Why error??");
  }
});

//GET new post form
router.get("/new", withAuth, (req, res) => {
  res.render("post");
});

//GET individual post and render to indivpost page
router.get("/post/:post_id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.post_id);

    if (postData) {
      const post = postData.get({ plain: true });
      console.log("post?", post);
      res.render("indivpost", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {}
});

//GET specefic post to edit and render
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      res.render("edit", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {}
});

//GET comment form for specific post
router.get("/comment/:post_id", withAuth, async (req, res) => {
  const { post_id } = req.params;
  const { commentEntry } = req.body;
  try {
    const newComment = await Comment.create({
      description: commentEntry,
      post_id,
      user_id: req.session.user_id,
    });
    const comments = await Comment.findByPk(newComment.id, {
      include: [{ model: User }],
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//export router
module.exports = router;
