const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact'); // Path to your Contact model

router.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message, phone } = req.body; // Include phone number
        const newContact = new Contact({ name, email, message, phone }); // Save phone number
        await newContact.save();
        res.status(201).json({ message: 'Message saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save the message' });
    }
});

module.exports = router;
