const router = require("express").Router();

const { Comment } = require("../../models");
const withAuth = require("../../components/auth");

//posts new comment
router.post("api/:post_id/comment", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.post_id
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
