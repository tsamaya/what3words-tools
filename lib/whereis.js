const geocode = require('./geocode');
const googleReverseGeocode = require('./google');

const messages = require('./errors');

const whereis = params =>
  new Promise((resolve, reject) => {
    geocode(params)
      .then((response) => {
        const result = {
          location: messages.UNKNOWN_LOCATION,
        };
        if (response && response.geometry) {
          result.words = response.words;
          const input = {
            lat: response.geometry.coordinates[1],
            lng: response.geometry.coordinates[0],
            key: params.googleKey || process.env.GOOGLE_API_KEY,
          };
          googleReverseGeocode(input)
            .then((gResponse) => {
              result.location = gResponse.location;
              result.formatted_address = gResponse.formatted_address;
              resolve(result);
            })
            .catch((gErr) => {
              reject(gErr);
            });
        } else {
          reject(result);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

module.exports = whereis;
