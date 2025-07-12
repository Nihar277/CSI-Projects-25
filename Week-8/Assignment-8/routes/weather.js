// routes/weather.js
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:city', async (req, res, next) => {
  const { city } = req.params;

  try {
    const response = await axios.get(`https://wttr.in/${city}?format=j1`);

    const current = response.data.current_condition[0];

    res.json({
      city: city,
      temperature: current.temp_C + ' °C',
      weather: current.weatherDesc[0].value,
      humidity: current.humidity + '%',
      wind: current.windspeedKmph + ' km/h'
    });
  } catch (err) {
    err.status = err.response?.status || 500;
    next(err);
  }
});

module.exports = router;
