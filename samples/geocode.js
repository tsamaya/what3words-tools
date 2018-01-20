/* eslint no-console: "off" */

const tools = require('../');

console.log('geocode `index.home.raft`');
const params0 = {
  addr: 'index.home.raft',
};
tools.geocode(params0).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});
console.log('geocode `51.521251,-0.203586`');
const params1 = {
  coords: '51.521251,-0.203586',
  lang: 'fr',
};
tools.geocode(params1).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});

console.log('geocode `lat: 51.521251, lng: -0.203586`');
const params2 = {
  lat: 51.521251,
  lng: -0.203586,
  lang: 'fr',
};
tools.geocode(params2).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});

console.log('geocode `{ lat: 51.521251, lng: -0.203586 }`');
const params3 = {
  latlng: {
    lat: 51.521251,
    lng: -0.203586,
  },
  lang: 'fr',
};
tools.geocode(params3).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});

console.log('geocode `{ lat: 51.521251, lng: -0.203586 } in lang : [en, fr, it, es, de]`');
const params4 = {
  latlng: {
    lat: 51.521251,
    lng: -0.203586,
  },
  lang: ['en', 'fr', 'it', 'es', 'de'],
};
tools.geocode(params4).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});
