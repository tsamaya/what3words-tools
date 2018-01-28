const w3w = require('what3words-api-nodejs-client');
const util = require('./util');
const messages = require('./errors');

/**
 * removes unused properties and combine lang and words in one property
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
const clean = response => {
  delete response.crs;
  delete response.properties.status;
  delete response.properties.thanks;
};

const reduceWordsLang = response => {
  const prop = `words_${response.properties.language}`;
  response.properties[prop] = response.properties.words;
  delete response.properties.language;
  delete response.properties.words;
};

const geocode = (params, resolve, reject) => {
  const input = {
    addr: params.addr,
    lang: params.lang || 'en',
    format: 'geojson',
    key: params.key || process.env.W3W_API_KEY,
  };

  w3w
    .forward(input)
    .then(data => {
      const response = JSON.parse(data);
      if (response.geometry) {
        clean(response);
        resolve(response);
      } else {
        reject(response);
      }
    })
    .catch(err => {
      reject(err);
    });
};

const reverseGeocode = (params, resolve, reject) => {
  let coords;
  if (!util.isUndefinedOrEmpty(params.coords)) {
    coords = params.coords; // eslint-disable-line
  } else if (!util.isUndefinedOrEmpty(params.latlng)) {
    coords = `${params.latlng.lat},${params.latlng.lng}`;
  } else {
    coords = `${params.lat},${params.lng}`;
  }
  if (util.isArray(params.lang)) {
    const p = [];
    // params.lang.forEach((lang) => {
    for (let i = 0; i < params.lang.length; i += 1) {
      const input = {
        coords,
        lang: params.lang[i],
        format: 'geojson',
        key: params.key || process.env.W3W_API_KEY,
      };
      p.push(w3w.reverse(input));
    } // );
    let result;
    Promise.all(p)
      .then(values => {
        let first = true;
        for (let i = 0; i < values.length; i += 1) {
          const response = JSON.parse(values[i]);
          if (response.geometry) {
            clean(response);
            if (first) {
              result = response;
              first = false;
              reduceWordsLang(response);
            } else {
              const prop = `words_${response.properties.language}`;
              result.properties[prop] = response.properties.words;
            }
          }
        }
        // values.forEach((value) => {
        // });
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    const lang = params.lang || 'en';

    const input = {
      coords,
      lang,
      format: 'geojson',
      key: params.key || process.env.W3W_API_KEY,
    };

    const p = w3w.reverse(input);

    p
      .then(data => {
        const response = JSON.parse(data);
        if (response.geometry) {
          clean(response);
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  }
};
/**
 * [exports description]
 * @param  {Object} params [description]
 * @return {Promise}       [description]
 */
module.exports = params =>
  new Promise((resolve, reject) => {
    // check input parameters
    if (typeof params === 'undefined' || params === null) {
      reject(messages.UNDEFINED_PARAMETERS);
    }
    // switch between operations regqding type of input
    if (!util.isUndefinedOrEmpty(params.addr)) {
      geocode(params, resolve, reject);
    } else if (!util.isUndefinedOrEmpty(params.coords)) {
      reverseGeocode(params, resolve, reject);
    } else if (!util.isUndefinedOrEmpty(params.latlng)) {
      reverseGeocode(params, resolve, reject);
    } else if (
      !(
        util.isUndefinedOrEmpty(params.lat) &&
        util.isUndefinedOrEmpty(params.lng)
      )
    ) {
      reverseGeocode(params, resolve, reject);
    } else {
      // no valid input parameters found
      reject(messages.INVALID_PARAMETERS);
    }
  });
