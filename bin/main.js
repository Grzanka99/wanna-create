#!/usr/bin/env node

const minimist = require('minimist');
const prepare = require('../lib/prepare');
const install = require('../lib/install');

const args = minimist(process.argv.slice(2), {
  alias: {
    p: 'prepare',
    h: 'help',
    i: 'install',
  },
});

if (args.h || args.h) {
  console.log(
    '-h, --help: Display this screen\n-p, --prepare: Prepare directory with my standarts setup\n',
  );
}

if (args.hasOwnProperty('p') || args.hasOwnProperty('prepare')) prepare(args.p || args.prepare);
if (args.hasOwnProperty('i') || args.hasOwnProperty('install')) install(args.i || args.install);
