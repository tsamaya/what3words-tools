const languages = require('./languages');
const geocode = require('./geocode');
// const whereis = require('./whereis');
const pack = require('../package.json');

module.exports = {
  version: pack.version,
  languages,
  geocode,
  // whereis,
};
