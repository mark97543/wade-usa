const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Enable parsing JSON request bodies

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});