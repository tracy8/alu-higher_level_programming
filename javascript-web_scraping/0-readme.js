#!/usr/bin/node
const fs = require('fs');

function readAndPrintFile (filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <file_path>');
} else {
  const filePath = process.argv[2];
  readAndPrintFile(filePath);
}
