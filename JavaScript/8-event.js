'use strict';

const adder = (initial) => {
  let value = initial;
  const add = (delta) => {
    value += delta;
    if (value >= add.maxValue) add.maxEvent(value);
    return add;                                     // Возврат ссылки (функции add) на саму себя
  };
  add.max = (max, event) => {                       // Создание метода add.max
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

// Usage

const maxReached = (value) => {
  console.log('max value reached, value: ' + value);
};

const a1 = adder(10).max(100, maxReached)(-12);           // Когда max = 100, будет вызвана функция maxReached, которая будет вычитать 12 из value

a1(25);
a1(50);
a1(75);
a1(100);
a1(-200)(50)(30);
