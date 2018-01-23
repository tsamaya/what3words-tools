const languages = require('./languages');
const geocode = require('./geocode');
const whereis = require('./whereis');
const nearby = require('./nearby');
const autocomplete = require('./autocomplete');
const pack = require('../package.json');

module.exports = {
  version: pack.version,
  languages,
  geocode,
  autocomplete,
  nearby,
  whereis,
};
