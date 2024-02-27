const router = require('express').Router()
const { Comment } = require('../../models/Comment')



router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        post: req.body.comment,
        blog_id: req.body.id,
        user_id: req.session.user_id
      });
      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router
