'use strict';

const fn = () => {
  console.log('Callback from timer');
};

const timeout = (interval, fn) => setTimeout(fn, interval);   // Функция для смены порядка аргументов (callback функция стала вторым аргументом), договоренность программистов

timeout(5000, fn);      // Правильная форма функции высшего порядка (аргумент callback идет вторым)
