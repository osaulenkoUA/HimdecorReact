import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './articles/articlesReducer.js';
import productsReducer from './products/productsReducer.js';

const store = configureStore({
	reducer: {
		articles: articlesReducer,
		product: productsReducer,
	},
});

export default store;
