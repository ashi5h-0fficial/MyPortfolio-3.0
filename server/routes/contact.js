const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Save new message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields required.' });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: errors.join(', ') });
    }
    console.error('Contact save error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// GET /api/contact - Get all messages (admin use)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
