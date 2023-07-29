const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000; // Choose any available port

app.use(cors());

app.get('/recipes', async (req, res) => {
  const { q, app_id, app_key } = req.query;
  try {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${q}&app_id=${app_id}&app_key=${app_key}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'An error occurred while fetching recipes' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
