import { createAction } from '@reduxjs/toolkit';

// --------------------------------------------------------------------------------------

const addArticlesRequest = createAction('articles/addArticlesRequest');
const addArticlesSuccess = createAction('articles/addArticlesSuccess');
const addArticlesError = createAction('articles/addArticlesError');

const getArticlesRequest = createAction('articles/getArticlesRequest');
const getArticlesSuccess = createAction('articles/getArticlesSuccess');
const getArticlesError = createAction('articles/getArticlesError');

export default {
  addArticlesRequest,
  addArticlesSuccess,
  addArticlesError,
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
};
