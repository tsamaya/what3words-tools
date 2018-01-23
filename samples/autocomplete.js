/* eslint no-console: "off" */

const tools = require('../');

console.log('autocomplete `toff`');
const params0 = {
  addr: 'toff',
};
tools.autocomplete(params0).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});
