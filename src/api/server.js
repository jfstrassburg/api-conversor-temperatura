const express = require('express');
const app = express();
const cors = require('cors');
const routerConverter = require('./routes/converter.routes');

app.use(cors());

routerConverter(app);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;
