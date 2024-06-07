#!/usr/bin/node
const request = require('request');

function printCharactersInMovie (movieId) {
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

    const movie = JSON.parse(body);
    const charactersUrls = movie.characters;

    charactersUrls.forEach(characterUrl => {
      request.get(characterUrl, (error, response, body) => {
        if (error) {
          console.error(error);
          return;
        }

        if (response.statusCode !== 200) {
          console.error(`Failed to fetch character data. Status code: ${response.statusCode}`);
          return;
        }

        const character = JSON.parse(body);
        console.log(character.name);
      });
    });
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <movie_id>');
} else {
  const movieId = process.argv[2];
  printCharactersInMovie(movieId);
}
