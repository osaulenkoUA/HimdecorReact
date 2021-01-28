import axios from 'axios';

import galleryActions from './galleryActions.js';

// axios.defaults.baseURL = 'https://sheltered-fjord-24910.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3005';

const addGallery = (obj) => async (dispatch) => {
	dispatch(galleryActions.addGalleryRequest());
	console.log(obj);
	try {
		const { data } = await axios.post('/gallery/add', obj);
		console.log(data);
		dispatch(galleryActions.addGallerySuccess(data));
	} catch (error) {
		dispatch(galleryActions.addGalleryError(error));
	}
};

const getGallery = () => async (dispatch) => {
	dispatch(galleryActions.getGalleryRequest());
	try {
		const { data } = await axios.get('/gallery/get');
		dispatch(galleryActions.getGallerySuccess(data));
	} catch (error) {
		dispatch(galleryActions.getGalleryError(error));
	}
};

export default {
	addGallery,
	getGallery,
};
