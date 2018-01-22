const languages = require('./languages');
const geocode = require('./geocode');
const whereis = require('./whereis');
const nearby = require('./nearby');
const pack = require('../package.json');

module.exports = {
  version: pack.version,
  languages,
  geocode,
  nearby,
  whereis,
};
