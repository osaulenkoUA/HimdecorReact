import axios from 'axios';

import articlesActions from './articlesActions';

// axios.defaults.baseURL = 'http://localhost:3005';
axios.defaults.baseURL = 'https://blooming-beach-72728.herokuapp.com';

const addArticle = ({ title, article, urlImage }) => async dispatch => {
  dispatch(articlesActions.addArticlesRequest());
  try {
    const { data } = await axios.post('/articles/add', {
      title,
      article,
      urlImage,
    });
    console.log(data);
    dispatch(articlesActions.addArticlesSuccess(data));
  } catch (error) {
    dispatch(articlesActions.addArticlesError(error));
  }
};

// const logIn = ({ email, password }) => async dispatch => {
//   dispatch(authActions.logInRequest());
//   try {
//     const { data } = await axios.post(
//       'https://fierce-plateau-20788.herokuapp.com/users/signin',
//       {
//         email,
//         password,
//       },
//     );
//     token.set(data.token);
//     dispatch(authActions.logInSuccess(data));
//   } catch (error) {
//     dispatch(authActions.logInError(error));
//   }
// };

// const logOut = () => async dispatch => {
//   dispatch(authActions.logOutRequest());
//   try {
//     await axios.post('https://fierce-plateau-20788.herokuapp.com/users/logout');
//     token.unset();
//     dispatch(authActions.logOutSuccess());
//   } catch (error) {
//     dispatch(authActions.logOutError(error));
//   }
// };

const getArticles = () => async dispatch => {
  dispatch(articlesActions.getArticlesRequest());
  try {
    const { data } = await axios.get('/articles/get');
    dispatch(articlesActions.getArticlesSuccess(data));
  } catch (error) {
    dispatch(articlesActions.getArticlesError(error));
  }
};

export default {
  addArticle,
  getArticles,
};
