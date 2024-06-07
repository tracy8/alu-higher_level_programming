#!/usr/bin/node
const firstArgument = process.argv[2];

const parsedNumber = parseInt(firstArgument);

if (!isNaN(parsedNumber)) {
  console.log(`My number: ${parsedNumber}`);
} else {
  console.log('Not a number');
}
