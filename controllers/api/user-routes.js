const router = require("express").Router();

const { User } = require("../../models");
console.log("user", User);

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.isSoftDeleted;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({
        message: "No user account found!",
      });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "No user account found!",
      });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.isSoftDeleted;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: "You are no logged in!" });
    });
  } catch (err) {
    res.status(400).json({
      message: "No user account found!",
    });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
