# redux-repatch-performance-comparison
Measure performance between [Redux](https://www.npmjs.com/package/redux) and [Repatch](https://www.npmjs.com/package/repatch)

## Run

```
npm install
node .
```

This comparison dispatches a big amount of actions to both of redux and repatch stores. I used a very simple increment action for both of measurement. I got many questions, why did I use these unrealistic actions. The reason, that is I would like to prevent the additional overhead via reducing, and ensure that the measurement can be independent from other effects, like object assigning.

## Results

Redux needs 9X more time to dispatching these actions than Repatch.