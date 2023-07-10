const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other Webpack configurations...
  plugins: [
    new Dotenv()
  ]
};
