/* eslint no-console: "off" */
const geocode = require('./geocode');

const DELTA = 0.000001;

const around = (square, params) => new Promise((resolve, reject) => {
  const center = {
    lat: square.geometry.coordinates[1],
    lng: square.geometry.coordinates[0],
  };
  const northeastBound = {
    lat: square.bbox[3],
    lng: square.bbox[2],
  };
  const southwestBound = {
    lat: square.bbox[1],
    lng: square.bbox[0],
  };

  const north = {
    lat: northeastBound.lat + DELTA,
    lng: center.lng,
    name: 'north',
    lang: params.lang,
    key: params.key,
  };
  const northeast = {
    lat: northeastBound.lat + DELTA,
    lng: northeastBound.lng + DELTA,
    name: 'northeast',
    lang: params.lang,
    key: params.key,
  };
  const east = {
    lat: center.lat,
    lng: northeastBound.lng + DELTA,
    name: 'east',
    lang: params.lang,
    key: params.key,
  };
  const southeast = {
    lat: southwestBound.lat - DELTA,
    lng: northeastBound.lng + DELTA,
    name: 'southeast',
    lang: params.lang,
    key: params.key,
  };
  const south = {
    lat: southwestBound.lat - DELTA,
    lng: center.lng,
    name: 'south',
    lang: params.lang,
    key: params.key,
  };
  const southwest = {
    lat: southwestBound.lat - DELTA,
    lng: southwestBound.lng - DELTA,
    name: 'southwest',
    lang: params.lang,
    key: params.key,
  };
  const west = {
    lat: center.lat,
    lng: southwestBound.lng - DELTA,
    name: 'west',
    lang: params.lang,
    key: params.key,
  };
  const northwest = {
    lat: northeastBound.lat + DELTA,
    lng: southwestBound.lng - DELTA,
    name: 'northwest',
    lang: params.lang,
    key: params.key,
  };
  const all = [north, northeast, east, southeast, south, southwest, west, northwest];
  const p = [];
  for (let i = 0; i < all.length; i += 1) {
    p.push(geocode(all[i]));
  }
  const result = {
    type: 'FeatureCollection',
    features: [],
  };
  result.features.push(square);
  Promise.all(p).then((values) => {
    for (let i = 0; i < values.length; i += 1) {
      result.features.push(values[i]);
    }
    resolve(result);
  }).catch(err => reject(err));
});

const nearby = params => new Promise((resolve, reject) => {
  geocode(params).then((data) => {
    around(data, params).then((response) => {
      resolve(response);
    }).catch((err) => {
      reject(err);
    });
  }).catch((err) => {
    reject(err);
  });
});
module.exports = nearby;
