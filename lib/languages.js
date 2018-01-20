const w3w = require('what3words-api-nodejs-client');

/**
 * Returns a promise resolved as an array of available languages with
 * what3words API
 *
 * @param  {Object} params [description]
 * @return {Promise}       [description]
 */
module.exports = params => new Promise((resolve, reject) => {
  w3w.languages(params).then((data) => {
    const response = JSON.parse(data);
    if (typeof response.languages !== 'undefined') {
      resolve(response.languages);
    } else {
      reject(response);
    }
  }).catch((err) => {
    reject(err);
  });
});
