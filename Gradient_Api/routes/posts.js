const express = require('express');
const auth = require('../middleware/authMiddleware');  // Authentication middlewares
const Post = require('../models/post');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username').populate('nest');
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const { title, content, nest } = req.body;
        const post = new Post({
            title,
            content,
            author: req.user.id,
            nest
        });

        await post.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.put('/:postID/vote', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        // For simplicity, let's assume the request body has a "type" field that can be "upvote" or "downvote"
        if (req.body.type === 'upvote') {
            post.upvotes++;
        } else if (req.body.type === 'downvote') {
            post.downvotes++;
        }

        await post.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
