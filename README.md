# what3words-tools

[![Build Status](https://travis-ci.org/tsamaya/what3words-tools.svg?branch=develop)](https://travis-ci.org/tsamaya/what3words-tools)

This is an unofficial set of tools around what3words API.

## usage

### Recommended
set up environment :

    $ export W3W_API_KEY=<YOUR-W3W-API-KEY>
    $ export GOOGLE_API_KEY=<YOUR-GOOGLE-API-KEY>

install globally:

    $ npm install -g what3words-tools

### alternative

    $ npm install what3words-tools

    then access to cli adding `./node_modules/.bin/`

    and API key can be adding a API level or as input parameters for cli

### CLI

    $ w3w-cli languages
    $ w3w-cli languages --w3w-key <YOUR-W3W-API-KEY>

    $ w3w-cli geocode --addr index.home.raft
    $ w3w-cli geocode --coords 51.521251,-0.203586

    $ w3w-cli whereis --addr index.home.raft
    $ w3w-cli whereis --addr index.home.raft --w3w-key <YOUR-W3W-API-KEY> --google-key <YOUR-GOOGLE-API-KEY>

### API

> TODO

see examples in [samples](./samples) folder

## Build and test

### setup

clone the repository

    $ npm i

### unit test

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
