const express = require('express');
const app = express();
const routerConverter = require('./routes/converter.routes');

routerConverter(app);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;
