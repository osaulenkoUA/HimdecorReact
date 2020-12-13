

import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './articles/articlesReducer.js';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
