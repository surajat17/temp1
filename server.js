const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.post('/echo', (req, res) => {
    const { inputString } = req.body;

    if (!inputString) {
        return res.status(400).json({ error: 'inputString is required' });
    }

    res.json({ echoedString: inputString });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});