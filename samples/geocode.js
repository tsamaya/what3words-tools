/* eslint no-console: "off" */

const tools = require('../');

tools.geocode().then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
