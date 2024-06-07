#!/usr/bin/node
const numArguments = process.argv.length - 2;

if (numArguments === 0) {
  console.log('No argument');
} else if (numArguments === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
