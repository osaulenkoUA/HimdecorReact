import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import galleryActions from './galleryActions.js';

const isShowModal = createReducer(false, {
	[galleryActions.showModal]: (_, { payload }) => payload,
});

const urlImg = createReducer(null, {
	[galleryActions.getUrlImg]: (_, { payload }) => payload,
});
export default combineReducers({ urlImg, isShowModal });
