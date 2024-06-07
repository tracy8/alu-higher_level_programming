#!/usr/bin/node
const request = require('request');

function computeCompletedTasks (apiUrl) {
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
      return;
    }

    const todos = JSON.parse(body);
    const completedTasks = {};

    todos.forEach(todo => {
      if (todo.completed) {
        const userId = todo.userId.toString();
        completedTasks[userId] = (completedTasks[userId] || 0) + 1;
      }
    });

    console.log(completedTasks);
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <api_url>');
} else {
  const apiUrl = process.argv[2];
  computeCompletedTasks(apiUrl);
}
