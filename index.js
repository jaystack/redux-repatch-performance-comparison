'use strict';

const { createStore } = require('redux');
const { Store } = require('repatch');

const MAX = 10e7;

const INCREMENT = 'INCREMENT';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

const reduxStore = createStore(reducer);
const repatchStore = new Store(0);

const reduxIncrement = { type: INCREMENT };
const repatchIncrement = state => state + 1;

console.time('redux');
for (let i = 0; i < MAX; ++i) {
  reduxStore.dispatch(reduxIncrement);
}
console.timeEnd('redux');

console.time('repatch');
for (let i = 0; i < MAX; ++i) {
  repatchStore.dispatch(repatchIncrement);
}
console.timeEnd('repatch');
