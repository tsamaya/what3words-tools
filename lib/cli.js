/* eslint no-console: "off" */

const tools = require('../');

/* eslint-disable */

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('languages')
  .command('geocode')
  .command('whereis')
  .demandCommand(1)

  .alias('a', 'addr')
  .nargs('a', 1)
  .describe('a', 'a 3 word address')

  .alias('c', 'coords')
  .nargs('c', 1)
  .describe('c', 'coordinates as lat,lng')

  .describe('l', 'a what3words APi supported language')
  .alias('l', 'lang')
  .nargs('l', 1)

  .alias('k', 'w3w-key')
  .nargs('k', 1)
  .describe('k', 'your W3W API KEY')

  .alias('K', 'google-key')
  .nargs('K', 1)
  .describe('K', 'your GOOGLE API KEY')

  .alias('v', 'verbose')
  .default('v', false)

  .help('h')
  .alias('h', 'help')
  .argv;

  /* eslint-enable */

const params = {};

// W3W_API_KEY
//
// check what3words API key from input parameters and from environnement variables
if (typeof argv.k !== 'undefined') {
  params.key = argv.k;
} else if (typeof process.env.W3W_API_KEY === 'undefined') {
  console.log('Warning W3W_API_KEY must be set as environnement or as an option parameter');
  process.exit(1);
}
// # commands
//
// languages
if (argv._.includes('languages')) {
  tools.languages(params).then((data) => {
    console.log(JSON.stringify(data));
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });
// geocode
} else if (argv._.includes('geocode')) {
  params.addr = argv.a;
  params.coords = argv.c;
  if (typeof argv.l !== 'undefined') {
    if (argv.l.indexOf(',') > 0) {
      params.lang = argv.l.split(',');
    } else {
      params.lang = argv.l;
    }
  } else {
    params.lang = argv.l;
  }
  tools.geocode(params).then((data) => {
    console.log(JSON.stringify(data));
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });
} else if (argv._.includes('whereis')) {
  // check GOOGLE_API_KEY from input parameters and from environnement variables
  if (typeof argv.K !== 'undefined') {
    params.googleKey = argv.K;
  } else if (typeof process.env.GOOGLE_API_KEY === 'undefined') {
    console.log('GOOGLE_API_KEY must be set as environnement or as an option parameter');
    process.exit(1);
  }
  params.addr = argv.a;
  tools.whereis(params).then((data) => {
    console.log(JSON.stringify(data));
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });
}
