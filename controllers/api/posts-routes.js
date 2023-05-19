const router = require('express').Router();
const Post = require('../../models/Post');

// Route to create/add a new post
router.post('/', async (req, res) => {
  try { 
    const postData = await Post.create({
    title: req.body.title,
    content: req.body.content,
    username: req.body.username,
    date: req.body.date,
  });
  // If the post is successfully created, the new response will be returned as json
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
