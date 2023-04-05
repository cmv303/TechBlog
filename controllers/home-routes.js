//rendering things on front-end

const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  console.log("Am I inside the GET?")
  try {
    // we need to get all Posts and include the User for each (change lines 8 and 9)
    const postData = await Post.findAll({
      include: [User],
    });
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log("this is a post", posts);
    // render all the posts here
    res.render('all', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  console.log("Am I inside the Post:id?")
  try {
    // what should we pass here? we need to get some data passed via the request body (something.something.id?)
    // change the model below, but not the findByPk method.
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
      // serialize the data
      const post = postData.get({ plain: true });
      // which view should we render for a single-post?
      res.render('/post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// giving you the login and signup route pieces below, no changes needed.
router.get('/login', (req, res) => {
  console.log("Am I inside the GET login?")
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  console.log("Am I inside the GET signup?")
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/logout', (req, res) => {
  console.log("Am I inside the GET logout?")
  res.render('logout');
});

module.exports = router;


//from old file
// GET home page
// get: (req, res) => {
//     res.render('all', { title: 'The Code Blog'});
// },
// post: (req, res) => {
//     let emailAddress = req.body.emailInput;
//     res.render('all', {title: 'The Code Blog', email:emailAddress});