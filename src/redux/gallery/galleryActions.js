import { createAction } from '@reduxjs/toolkit';

const showModal = createAction('gallery/showModal');
const getUrlImg = createAction('gallery/getUrlImg');
export default {
	showModal,
	getUrlImg,
};
