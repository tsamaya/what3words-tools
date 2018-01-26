const languages = require('./languages');
const geocode = require('./geocode');
const whereis = require('./whereis');
const around = require('./around');
const pack = require('../package.json');

module.exports = {
  version: pack.version,
  languages,
  geocode,
  around,
  whereis,
};
