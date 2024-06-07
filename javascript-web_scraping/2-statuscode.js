#!/usr/bin/node
const request = require('request');

function displayStatusCode (url) {
  request.get(url, (error, response) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`code: ${response.statusCode}`);
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <URL>');
} else {
  const url = process.argv[2];
  displayStatusCode(url);
}
