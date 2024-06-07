#!/usr/bin/node
const request = require('request');
const fs = require('fs');

function fetchAndStoreWebpage (url, filePath) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to fetch webpage. Status code: ${response.statusCode}`);
      return;
    }

    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}

if (process.argv.length !== 4) {
  console.log('Usage: node script.js <url> <file_path>');
} else {
  const url = process.argv[2];
  const filePath = process.argv[3];
  fetchAndStoreWebpage(url, filePath);
}
