/* eslint no-console: "off" */

const tools = require('../');

console.log('nearby `index.home.raft`');
const params0 = {
  addr: 'index.home.raft',
};
tools.nearby(params0).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});

console.log('nearby `51.521251,-0.203586`');
const params1 = {
  coords: '51.521251,-0.203586',
};
tools.nearby(params1).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});

console.log('nearby `{ lat: 51.521251, lng: -0.203586 } in lang : [en, fr, it, es, de]`');
const params2 = {
  latlng: {
    lat: 51.521251,
    lng: -0.203586,
  },
  lang: ['en', 'fr', 'it', 'es', 'de'],
};
tools.nearby(params2).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});
