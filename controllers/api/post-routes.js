//dependencies
const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../components/auth");

//POST request for new post
router.post("/post", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE (PUT) existing post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE existing post
router.delete("/post/:id", withAuth, async (req, res) => {
  try {
    const affectedRows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//export module
module.exports = router;
