import { createAction } from '@reduxjs/toolkit';

const showModal = createAction('gallery/showModal');
const getUrlImg = createAction('gallery/getUrlImg');
const addGalleryRequest = createAction('addGalleryRequest');
const addGallerySuccess = createAction('addGallerySuccess');
const addGalleryError = createAction('addGalleryError');

const getGalleryRequest = createAction('getGalleryRequest');
const getGallerySuccess = createAction('getGallerySuccess');
const getGalleryError = createAction('getGalleryError');

export default {
	showModal,
	getUrlImg,
	addGalleryRequest,
	addGallerySuccess,
	addGalleryError,
	getGalleryRequest,
	getGallerySuccess,
	getGalleryError,
};
