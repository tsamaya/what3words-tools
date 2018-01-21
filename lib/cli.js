/* eslint no-console: "off" */

const program = require('commander');
const tools = require('./');

program
  .version(tools.version);

program
  .command('geocode')
  .description('geocode 3 word address, or reverse geocode coordinates')
  .option('-a, --addr [address]', 'a 3 word address')
  .option('-l, --lang [language]', 'set language')
  .option('-c, --coords [latitutde,longitude]', 'coordinates')
  .option('-k, --w3w_key [YOUR-W3W-API-KEY]', 'set YOUR-W3W-API-KEY')
  .action((options) => {
    const params = {};
    if (typeof options.w3w_key !== 'undefined') {
      params.key = options.w3w_key;
    }
    if (typeof options.addr !== 'undefined') {
      params.addr = options.addr;
    }
    if (typeof options.lang !== 'undefined') {
      params.lang = options.lang;
    }
    if (typeof options.coords !== 'undefined') {
      params.coords = options.coords;
    }
    tools.geocode(params).then((data) => {
      console.log(JSON.stringify(data));
    }).catch((err) => {
      console.log(JSON.stringify(err));
    });
  });

program
  .command('whereis')
  .description('list what3words API suported langauages')
  .option('-a, --addr [address]', 'a 3 word address')
  .option('-k, --w3w_key [YOUR-W3W-API-KEY]', 'set YOUR-W3W-API-KEY')
  .option('-K, --google_key [YOUR-GOOGLE-API-KEY]', 'set YOUR-GOOGLE-API-KEY')
  .action((options) => {
    const params = {
      addr: options.addr,
    };
    if (typeof options.w3w_key !== 'undefined') {
      params.key = options.w3w_key;
    }
    if (typeof options.google_key !== 'undefined') {
      params.googleKey = options.google_key;
    }
    tools.whereis(params).then((data) => {
      console.log(JSON.stringify(data));
    }).catch((err) => {
      console.log(JSON.stringify(err));
    });
  });

program
  .command('languages')
  .description('list what3words API suported langauages')
  .action((/* options */) => {
    tools.languages().then((data) => {
      console.log(JSON.stringify(data));
    }).catch((err) => {
      console.log(JSON.stringify(err));
    });
  });

program.parse(process.argv);
