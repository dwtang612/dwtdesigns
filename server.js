const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mailgun = require('mailgun-js');

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Mailgun configuration
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON (for API requests)
app.use(express.json());

// API route to send email
app.post('/api/send-message', (req, res) => {
    const { name, email, message } = req.body;

    const data = {
        from: email, // Sender's email from the form
        to: 'your-email@example.com', // Recipient email (your own)
        subject: `New message from ${name}`,
        text: message,
    };

    // Send the email using Mailgun
    mg.messages().send(data, (error, body) => {
        if (error) {
            console.error('Mailgun error:', error);
            res.status(500).json({ success: false, message: 'Failed to send the email.' });
        } else {
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        }
    });
});

// Serve the React app (for production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
