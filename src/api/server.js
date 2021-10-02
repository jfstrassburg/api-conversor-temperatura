const express = require('express');
const app = express();
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const routerConverter = require('./routes/converter.routes');

app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

routerConverter(app);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;
