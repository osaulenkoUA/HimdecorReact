import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './articles/articlesReducer.js';
import productsReducer from './products/productsReducer.js';
import galleryReducer from './gallery/galleryReducer.js';

const store = configureStore({
	reducer: {
		articles: articlesReducer,
		product: productsReducer,
		gallery: galleryReducer,
	},
});

export default store;
