const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/fahrenheit/:value/celsius', (req, res) => {
  try {
    const { value } = req.params;
    if (isNaN(value)) {
      return res.status(400).send();
    }
    const celsius = (((value - 32) * 5) / 9).toFixed(2);
    res.status(200).json({ celsius });
  } catch (e) {
    return res.status(500).send();
  }
});

app.get('/celsius/:value/fahrenheit', (req, res) => {
  try {
    const { value } = req.params;
    if (isNaN(value)) {
      return res.status(400).send();
    }
    const fahrenheit = ((value * 9) / 5 + 32).toFixed(2);
    res.status(200).json({ fahrenheit });
  } catch (e) {
    return res.status(500).send();
  }
});

module.exports = app;
