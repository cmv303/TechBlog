const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../components/auth");

//posts new comment
router.post(`/:post_id`, withAuth, async (req, res) => {
  const postId = req.params;
  console.log("postId", req.params);
  console.log("postPost", postId);
  const { commentEntry } = req.body;
  console.log("CommentEntry", req.body);
  if (!commentEntry) {
    res.status(400).json({ message: "Comment body is required" });
    return;
  }

  try {
    const newComment = await Comment.create({
      post_id: postId.post_id,
      description: commentEntry,
      user_id: req.session.user_id,
    });
    const comment = await Comment.findByPk(newComment.id, {
      include: [{ model: User }],
      raw: true,
      nest: true
    });
    res.json(comment);
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

module.exports = router;
