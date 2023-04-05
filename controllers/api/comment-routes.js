const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../components/auth");

//posts new comment
router.post(`/api/post/:post_id/comment`, withAuth, async (req, res) => {
  const { post_id } = req.params;
  const { commentEntry } = req.body;
  try {
    const newComment = await Comment.create({ ...commentEntry, user_id: req.session.user_id,
      post_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
