'use strict';

const fs = require('fs');

fs.readFile('./1-callback.js', 'utf8', (err, data) => {   // Метод readFile из библиотеки Node.js
  console.log({ lines: data.split('\n').length });
});

console.log('end');       // end выведет позже, т. к. метод readFile занимает время
