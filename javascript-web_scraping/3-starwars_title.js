#!/usr/bin/node
const request = require('request');

function getMovieTitle (movieId) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
      return;
    }

    const movieData = JSON.parse(body);
    console.log(`${movieData.title}`);
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <movie_id>');
} else {
  const movieId = process.argv[2];
  getMovieTitle(movieId);
}
