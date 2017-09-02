'use strict';

const { createStore, combineReducers } = require('redux');
const { Store } = require('repatch');

const MAX = 10e6;

const INCREMENT = 'INCREMENT';

const reduxCountReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

const repatchReduceCount = countReducer => state => Object.assign({}, state, {
  count: countReducer(state.count),
});

const reduxStore = createStore(combineReducers({ count: reduxCountReducer }));
const repatchStore = new Store({});

const reduxIncrement = () => ({ type: INCREMENT });
const repatchIncrement = () => repatchReduceCount(state => state + 1);

console.time('redux');
for (let i = 0; i < MAX; ++i) {
  reduxStore.dispatch(reduxIncrement());
}
console.timeEnd('redux');

console.time('repatch');
for (let i = 0; i < MAX; ++i) {
  repatchStore.dispatch(repatchIncrement());
}
console.timeEnd('repatch');
