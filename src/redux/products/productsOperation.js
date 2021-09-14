import axios from 'axios';

import productsActions from './productsActions';

axios.defaults.baseURL = 'https://blooming-beach-72728.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3005';

const addProduct = obj => async dispatch => {
  dispatch(productsActions.addProductsRequest());
  console.log(obj);
  try {
    const { data } = await axios.post('/product/add', obj);
    console.log(data);
    dispatch(productsActions.addProductsSuccess(data));
  } catch (error) {
    dispatch(productsActions.addProductsError(error));
  }
};


const getProduct = () => async dispatch => {
  dispatch(productsActions.getProductsRequest());
  try {
    const { data } = await axios.get('/product/get');
    dispatch(productsActions.getProductsSuccess(data));
  } catch (error) {
    dispatch(productsActions.getProductsError(error));
  }
};

export default {
  addProduct,
  getProduct,
};
