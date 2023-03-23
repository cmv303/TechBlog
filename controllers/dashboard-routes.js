const router = require('express').Router();
const { Post } = require('../models/Post');
const { User } = require('../models/User');
const withAuth = require('../components/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["post_name", "description", "user_name", "user_id"],
    });
    res.status(200).json(postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    // fill in the view to be rendered
    res.render('post', {
      // this is how we specify a different layout other than main! no change needed
      layout: 'dashboard',
      // coming from line 10 above, no change needed
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  // what view should we send the client when they want to create a new-post? (change this next line)
  res.render('post', {
    // again, rendering with a different layout than main! no change needed
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body
    const postData = await Post.findByPk("user_id");

    if (postData) {
      // serializing the data
      const post = postData.get({ plain: true });
      // which view should we render if we want to edit a post?
      //! ?? is it 'edit' that I need?
      res.render('edit', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = { router, Post, User, withAuth };
