const _ = require('lodash');
const w3w = require('what3words-api-nodejs-client');
const util = require('./util');
const messages = require('./errors');

/**
 * [autocomplete description]
 * @param  {Object} params [description]
 * @return {Promise}        [description]
 */
const autocomplete = params => new Promise((resolve, reject) => {
  if (typeof params === 'undefined') {
    reject(messages.UNDEFINED_PARAMETERS);
  } else if (util.isUndefinedOrEmpty(params.addr)) {
    reject(messages.INVALID_PARAMETERS);
  } else {
    // nstop?
    const n = params.addr.split('.').length - 1;
    // n stop to add
    const nstop = 2 - n;
    const input = {
      lang: params.lang,
      // key: params.key,
    };
    if (nstop === 2) {
      input.addr = `${params.addr}.a.a`;
      input.count = 30;
    } else if (nstop === 1) {
      input.addr = `${params.addr}.a`;
      input.count = 20;
    }

    w3w.autosuggestML(input).then((data) => {
      const response = JSON.parse(data);
      if (nstop === 0) {
        if (typeof response.suggestions !== 'undefined') {
          resolve(response.suggestions);
        } else {
          reject(response);
        }
      } else {
        const suggestions = [];
        if (nstop === 1) {
          for (let i = 0; i < response.suggestions.length; i += 1) {
            const suggestion = response.suggestions[i];
            suggestions.push({
              words: suggestion.words.substr(0, suggestion.words.lastIndexOf('.')),
            });
          }
        } else if (nstop === 2) {
          for (let i = 0; i < response.suggestions.length; i += 1) {
            const suggestion = response.suggestions[i];
            suggestions.push({
              words: suggestion.words.substr(0, suggestion.words.indexOf('.')),
            });
          }
        }
        resolve(_.uniqWith(suggestions, _.isEqual));
      }
    }).catch((err) => {
      reject(err);
    });
  }
});

module.exports = autocomplete;
