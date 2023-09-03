const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');  // Assuming you have a User model in a models directory
const auth = require('../middleware/authMiddleware');  // Authentication middleware

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        username,
        email,
        password: hashedPassword
    });

    await user.save();

    // Create JWT token
    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: 3600 });
    res.json({ token });
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: 3600 });
    res.json({ token });
});

// Get authenticated user's profile
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
});

// Get user activities (stub, to be expanded with actual logic)
router.get('/:userID/activities', async (req, res) => {
    // Placeholder logic. You'd likely retrieve user's posts, comments, etc. from the database.
    res.json({ activities: 'User activities for ' + req.params.userID });
});

module.exports = router;
