const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET Return a random giph
router.get('/api/random', async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.json(error);
  }
});

// GET Return trending giphs
router.get('/api/trending', async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.json(error);
  }
});

// GET Return giphs based on a search by the user
router.get('/api/search', async (req, res) => {
  const { input } = req.query;
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.json(error);
  }
});

// GET Return a giph based on its ID
router.get('/api/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/${id}?api_key=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
