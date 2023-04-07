//dependencies and models
const router = require("express").Router();
const { User } = require("../../models");

//POST request to sign up new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    //save user info in session
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST request to log in
router.post("/login", async (req, res) => {
  try {
    //validate email and password
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(400).json({
        message: "Incorrect username or password!",
      });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);
    console.log("valid password???", validPassword);
    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect username or password!",
      });
      return;
    }

    //save logged in user's info in session
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({
      message: "Sorry, we couldn't find you! Please try again later.",
    });
  }
});

//POST request to log out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

//export module
module.exports = router;
