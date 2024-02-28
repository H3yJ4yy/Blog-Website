const router = require('express').Router()
const { Comment } = require('../../models/index')



router.post('/', async (req, res) => {

  try {
    const newComment = Comment.create({...req.body, user_id: req.session.user_id})
    res.json(newComment)
  } catch (error) {
    res.json(error)
  }
    
  });





module.exports = router
