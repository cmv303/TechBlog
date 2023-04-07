const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../components/auth');

router.post('/post', withAuth, async (req, res) => {
    console.log("hi, hello, how are you")
    const body = req.body;

    try {
        console.log("Are you userIDDD?", req.session.user_id)
        const newPost = await Post.create({ ...body, user_id: req.session.user_id });
        res.json(newPost);
    } catch (err) {
        console.log("why 500 error", err)
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
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

router.delete('/post/:id', withAuth, async (req, res) => {
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

module.exports = router;