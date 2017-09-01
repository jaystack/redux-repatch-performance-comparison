# redux-repatch-performance-comparison
Measure performance between [Redux](https://www.npmjs.com/package/redux) and [Repatch](https://www.npmjs.com/package/repatch)

## Run

```
npm install
node .
```

This comparison dispatches a big amount of actions to both of redux and repatch stores. I used a very simple increment action for both of measurement.

## Results

Redux needs 9X more time to dispatching these actions then Repatch.