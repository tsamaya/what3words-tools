// const w3w = require('what3words-api-nodejs-client');
const util = require('./util');
const messages = require('./errors');

/**
 * [exports description]
 * @param  {Object} params [description]
 * @return {Promise}       [description]
 */
module.exports = params => new Promise((resolve, reject) => {
  // check input parameters
  if (typeof params === 'undefined' || params === null) {
    reject(messages.UNDEFINED_PARAMETERS);
  }
  let noInputParam = false;
  // check string addr
  if (util.isUndefinedOrEmpty(params.addr)) {
    noInputParam = true;
  }
  // check string coords lat,lng
  if (util.isUndefinedOrEmpty(params.coords)) {
    noInputParam = true;
  }
  // checl latlng Object
  if (util.isUndefinedOrEmpty(params.latlng)) {
    noInputParam = true;
  }
  // check individual lat, lng values
  if (util.isUndefinedOrEmpty(params.lat) && util.isUndefinedOrEmpty(params.lng)) {
    noInputParam = true;
  }
  if (noInputParam) {
    reject(messages.INVALID_PARAMETERS);
  }
});
