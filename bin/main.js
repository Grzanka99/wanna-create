#!/usr/bin/env node

const prepare = require('../lib/prepare');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
  alias: {
    p: 'prepare',
    h: 'help'
  }
});

if (args.h || args.h) {
  console.log(
    '-h, --help: Display this screen\n-p, --prepare: Prepare directory with my standarts setup\n'
  );
}

if (args.hasOwnProperty('p') || args.hasOwnProperty('prepare')) {
  console.log(prepare());
}
