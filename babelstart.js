require('@babel/polyfill');
require('@babel/register')({
  presets: ['@babel/preset-env']
});

const app = require('./main.js')

module.exports = app;
