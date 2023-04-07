const router = require("express").Router();
const { Post, Comment } = require("../models");
const withAuth = require("../components/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [Comment]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    // fill in the view to be rendered
    res.render("dashboard", { posts });
  } catch (err) {
    console.log("Why error??");
  }
});

router.get("/new", withAuth, (req, res) => {
  // what view should we send the client when they want to create a new-post? (change this next line)
  res.render("post");
});

router.get("/post/:post_id", withAuth, async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body
    const postData = await Post.findByPk(req.params.post_id);

    if (postData) {
      // serializing the data
      const post = postData.get({ plain: true });
      // which view should we render if we want to edit a post?
      console.log("post?", post);
      res.render("indivpost", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {}
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      // serializing the data
      const post = postData.get({ plain: true });
      // which view should we render if we want to edit a post?
      //! ?? is it 'edit' that I need?
      res.render("edit", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {}
});

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

module.exports = router;
