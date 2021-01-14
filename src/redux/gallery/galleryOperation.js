import axios from 'axios';

import productsActions from './productsActions';

// axios.defaults.baseURL = 'https://sheltered-fjord-24910.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3005';

const addProduct = (obj) => async (dispatch) => {
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

const getProduct = () => async (dispatch) => {
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
