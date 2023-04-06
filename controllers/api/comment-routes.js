const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../components/auth");

//posts new comment
router.post(`/:post_id`, withAuth, async (req, res) => {
  const { post_id } = req.params;
  const { commentEntry } = req.body;
  try {
    const newComment = await Comment.create({ 
      commentEntry,
      post_id,
      user_id: req.session.user_id
    });
    const comment = await Comment.findByPk(newComment.id, {
      include: [{ model: User }]
    });
    res.json(comment);
  } catch (err) {
    console.log("error", err)
    res.status(500).json(err);
  }
});



module.exports = router;
