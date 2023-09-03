const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware'); 

router.put('/:nestID', auth, async (req, res) => {
    try {
        const nest = await Nest.findById(req.params.nestID);
        if (!nest) {
            return res.status(404).json({ msg: 'Nest not found' });
        }

        // Ensure the user is the creator of the nest
        if (nest.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const { name, description } = req.body;
        nest.name = name;
        nest.description = description;

        await nest.save();
        res.json(nest);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


const Comment = require('../models/comment');

router.get('/:nestID/Comments', async (req, res) => {
    try {
        const comments = await Comment.find({ post: { $in: nest.posts } }).populate('author', 'username');
        res.json(comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/:nestID/Comments', auth, async (req, res) => {
    try {
        const { content } = req.body;
        const comment = new Comment({
            content,
            author: req.user.id,
            post: req.params.postID
        });

        await comment.save();
        res.json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


router.post('/:nestID/follow', auth, async (req, res) => {
    try {
        const nest = await Nest.findById(req.params.nestID);
        if (!nest) {
            return res.status(404).json({ msg: 'Nest not found' });
        }

        // Add user to the nest's followers if not already followed
        if (nest.followers.includes(req.user.id)) {
            return res.status(400).json({ msg: 'Already following' });
        }

        nest.followers.push(req.user.id);
        await nest.save();

        res.json({ msg: 'Followed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.delete('/:nestID/follow', auth, async (req, res) => {
    try {
        const nest = await Nest.findById(req.params.nestID);
        if (!nest) {
            return res.status(404).json({ msg: 'Nest not found' });
        }

        const index = nest.followers.indexOf(req.user.id);
        if (index === -1) {
            return res.status(400).json({ msg: 'Not following' });
        }

        nest.followers.splice(index, 1);
        await nest.save();

        res.json({ msg: 'Unfollowed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;