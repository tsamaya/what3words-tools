/* eslint no-console: "off" */

const tools = require('../');

console.log('whereIs `index.home.raft`');
const params = {
  addr: 'index.home.raft',
};
tools.whereis(params).then((data) => {
  console.log(JSON.stringify(data));
  console.log('-------------------------------------------------------------');
}).catch((err) => {
  console.log(JSON.stringify(err));
  console.log('-------------------------------------------------------------');
});
