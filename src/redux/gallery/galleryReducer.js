import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import galleryActions from './galleryActions.js';

const isShowModal = createReducer(false, {
	[galleryActions.showModal]: (_, { payload }) => payload,
});

const urlImg = createReducer(null, {
	[galleryActions.getUrlImg]: (_, { payload }) => payload,
});




const initialState = [];
const addGallery = (_, { payload }) => payload;
const getGallerySuccess = (_, { payload }) => payload;

const gallery = createReducer(initialState, {
  [galleryActions.addGallerySuccess]: addGallery,
  [galleryActions.getGallerySuccess]: getGallerySuccess,
});









export default combineReducers({ urlImg, isShowModal,gallery });
