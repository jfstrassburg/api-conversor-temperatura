const {
  getFahrenheitToCelsius,
  getCelsiusToFahrenheit,
} = require('../controllers/converter.controller');

module.exports = (app) => {
  app.get('/fahrenheit/:value/celsius', getFahrenheitToCelsius);
  app.get('/celsius/:value/fahrenheit', getCelsiusToFahrenheit);
};
