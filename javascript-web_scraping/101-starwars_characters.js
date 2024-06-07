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
    const characterUrls = movie.characters;
    const characters = [];

    // Fetch all character details
    Promise.all(characterUrls.map(characterUrl => {
      return new Promise((resolve, reject) => {
        request.get(characterUrl, (error, response, body) => {
          if (error) {
            reject(new Error(error));
            return;
          }

          if (response.statusCode !== 200) {
            reject(new Error(`Failed to fetch character data. Status code: ${response.statusCode}`));
            return;
          }

          const character = JSON.parse(body);
          characters.push(character.name);
          resolve();
        });
      });
    })).then(() => {
      // Print characters in the order they appear in the film
      characters.forEach(character => console.log(character));
    }).catch(error => {
      console.error(error);
    });
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <movie_id>');
} else {
  const movieId = process.argv[2];
  printCharactersInMovie(movieId);
}
