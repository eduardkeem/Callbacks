'use strict';

const { EventEmitter } = require('events');         // Импорт EventEmitter через reauire из библиотеки events в node.js

const emitter = new EventEmitter();                 // Порождает экземпляр EventEmitter

emitter.on('new city', (city) => {      // Метод on, повесили на 'new city', событие стрелочной функции
  console.log('Emitted city:', city);
});

emitter.on('data', (array) => {         // Метод on, повесили на 'data', другое событие
  console.log(array.reduce((a, b) => a + b));
});

emitter.emit('new city', 'Delhi');      // Вызов emitter-а
emitter.emit('new city', 'Berlin');     // Вызов emitter-а
emitter.emit('new city', 'Tokyo');      // Вызов emitter-а
emitter.emit('data', [5, 10, 7, -3]);   // Вызов emitter-а
