# what3words-tools

This is an unofficial set of tools around what3words API.

[![Build Status](https://travis-ci.org/tsamaya/what3words-tools.svg?branch=develop)](https://travis-ci.org/tsamaya/what3words-tools)


## usage

### Recommended
Set up environment :

    $ export W3W_API_KEY=<YOUR-W3W-API-KEY>

and for the `whereis` operation:

    $ export GOOGLE_API_KEY=<YOUR-GOOGLE-API-KEY>

Install globally:

    $ npm install -g what3words-tools

### alternative

    $ npm install what3words-tools

then access the CLI by adding the path : `./node_modules/.bin/`

and API key can be added at the API level or as input parameters for CLI

### CLI

    $ what3words-tools languages
    $ what3words-tools languages --w3w-key <YOUR-W3W-API-KEY>

    $ what3words-tools geocode --addr index.home.raft
    $ what3words-tools geocode --coords 51.521251,-0.203586

    $ what3words-tools whereis --addr index.home.raft
    $ what3words-tools whereis --addr index.home.raft --w3w-key <YOUR-W3W-API-KEY> --google-key <YOUR-GOOGLE-API-KEY>

### API

> TODO

see examples in [samples](./samples) folder

## Build and test

### setup

clone the repository

    $ npm i

### unit tests

    $ npm test

### coverage

    $ npm run coverage

report is available with :

    $ open coverage/lcov-report/index.html

## Contributing

Anyone and everyone is welcome to contribute.

## Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
