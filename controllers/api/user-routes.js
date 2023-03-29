const router = require("express").Router();

const { User } = require("../../models");
console.log("user", User);

router.post("/signup", async (req, res) => {
  console.log("am I hitting signup??")
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("Am i logged in?")
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
console.log("valid password???", validPassword)
    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect username or password!",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ message: "You are now logged in!" });
    });
  } catch (err) {
    console.log("ERROR", err)
    res.status(400).json({
      message: "Sorry, we couldn't find you! Please try again later.",
    });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
