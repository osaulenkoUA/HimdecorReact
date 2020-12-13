import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import articlesActions from './articlesActions';

const initialState = [];
const addArtricle = (_, { payload }) => payload;
const getArtricle = (_, { payload }) => payload;

const articles = createReducer(initialState, {
  [articlesActions.addArticlesSuccess]: addArtricle,
  [articlesActions.getArticlesSuccess]: getArtricle,
});

export default combineReducers({ articles });
