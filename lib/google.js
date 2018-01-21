const axios = require('axios');
const util = require('./util');
const messages = require('./errors');

const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

const geocodeGoogle = params =>
  axios.get(GOOGLE_GEOCODE_URL, {
    params,
  });
/**
 * parse Google Address Components using only
 * sublocality_level_1, postal_town, administrative_area_level_1 and country
 *
 * @param  {Object} addressComponents [description]
 * @return {String}                   [description]
 */
const parseGoogleAddressComponents = (addressComponents) => {
  let location = messages.UNKNOWN_LOCATION;
  if (util.isArray(addressComponents)) {
    // empty location for concatenate components
    location = '';
    addressComponents.forEach((component) => {
      const addressTypes = component.types;
      addressTypes.forEach((type) => {
        if (type === 'sublocality_level_1') {
          location += `${component.long_name}, `;
        }
        if (type === 'postal_town') {
          location += `${component.long_name}, `;
        }
        if (type === 'administrative_area_level_1') {
          location += `${component.long_name}, `;
        }
        if (type === 'country') {
          location += component.long_name;
        }
      });
    });
    // is it still empty ?
    if (location === '') {
      location = messages.UNKNOWN_LOCATION;
    }
  }
  return location;
};

const googleReverseGeocode = params =>
  new Promise((resolve, reject) => {
    const lat = params.lat; // eslint-disable-line

    const lng = params.lng; // eslint-disable-line

    const key = params.key; // eslint-disable-line

    if (!util.isNumber(lat) || !util.isNumber(lng)) {
      reject(messages.INVALID_COORDS_PARAMETERS);
      return;
    }

    const input = {};
    input.latlng = `${lat},${lng}`;
    input.key = key;
    geocodeGoogle(input)
      .then((response) => {
        const result = {
          location: messages.UNKNOWN_LOCATION,
        };
        // console.log('200 response');
        if (
          response.data &&
          response.data.results &&
          response.data.results[0]
        ) {
          const first = response.data.results[0];
          result.location = parseGoogleAddressComponents(first.address_components);
          if (first.formatted_address) {
            result.formatted_address = first.formatted_address;
          }
        }
        resolve(result);
      })
      .catch((err) => {
        // console.log('googleReverseGeocode err response', err);
        reject(err.response.data);
      });
  });

module.exports = googleReverseGeocode;
