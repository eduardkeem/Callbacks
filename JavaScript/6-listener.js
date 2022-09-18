'use strict';

const iterate = (array, listener) => {        // listener - обработчик событий
  for (const item of array) {
    listener(item);
  }
};

const cities = ['Kiev', 'London', 'Beijing'];

const print = (city) => {
  console.log('City:', city);
};

iterate(cities, print);
