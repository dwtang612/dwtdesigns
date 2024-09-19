// Import necessary AWS SDK v3 modules
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Configure SES client
const sesClient = new SESClient({ region: 'us-east-1' }); // Replace with your AWS region

// Route to handle email sending
app.post('/api/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    const params = {
        Destination: {
            ToAddresses: ['dfwtdesigns@gmail.com'],  // Recipient email
        },
        Message: {
            Body: {
                Text: { Data: message },  // Email message body
            },
            Subject: { Data: `New Contact Message from ${name}` },  // Email subject
        },
        Source: 'your-verified-email@example.com',  // Your verified SES email
    };

    try {
        const command = new SendEmailCommand(params);
        const data = await sesClient.send(command);
        console.log('Email sent:', data);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
