const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb+srv://archit_shankar:06keoaEVd8ofe0pB@cluster0.rgtxbqt.mongodb.net/");

const app = express();

// Specify the allowed origin (update with your frontend URL)
const allowedOrigin = 'https://zerodha.loca.lt/date.html';

// Use the cors middleware with specific origin
app.use(cors({
    origin: allowedOrigin,
}));

// Create a Mongoose model for the ClickCount
const ClickCount = mongoose.model('ClickCount', {
    count: Number,
});

const ClickNCount = mongoose.model('ClickNCount', {
    count: Number,
});


// Body parser middleware
app.use(express.json());

// Define the route to handle POST requests to /click
app.post('/send-message', async (req, res) => {
    try {
        // Find the existing count or create a new one
        const clickCount = await ClickCount.findOne() || new ClickCount({ count: 0 });

        // Increment the click count
        clickCount.count += 1;

        // Save the updated count to the database
        await clickCount.save();

        // Send a response
        res.json({ message: `Button clicked ${clickCount.count} times` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.post('/sendN-message', async (req, res) => {
    try {
        // Find the existing count or create a new one
        const clickNCount = await ClickNCount.findOne() || new ClickNCount({ count: 0 });

        // Increment the click count
        clickNCount.count += 1;

        // Save the updated count to the database
        await clickNCount.save();

        // Send a response
        res.json({ message: `Button clicked ${clickNCount.count} times` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
