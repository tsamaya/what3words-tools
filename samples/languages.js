/* eslint no-console: "off" */

const tools = require('../');

tools
  .languages()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
