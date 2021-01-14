import React from 'react';
import s from './Gallery.module.css';
import galleryActions from '../../redux/gallery/galleryActions.js';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow.js';

const gallary = [
	{
		url: 'https://himdecor.ua/static/media/uploads/GalleryHD/marmorino_1.jpg',
		title: 'Marmorini',
	},
	{
		url: 'https://himdecor.ua/static/media/uploads/GalleryHD/marmorino_1.jpg',
		title: 'Marmorini',
	},
	{
		url: 'https://himdecor.ua/static/media/uploads/GalleryHD/marmorino_1.jpg',
		title: 'Marmorini',
	},
	{
		url: 'https://himdecor.ua/static/media/uploads/GalleryHD/marmorino_1.jpg',
		title: 'Marmorini',
	},
];

const Gallary = () => {
	const dispatch = useDispatch();
	const showModal = useSelector((state) => state.gallery.isShowModal);
	function onHandleClick({ target }) {
		dispatch(galleryActions.showModal(true));
		dispatch(galleryActions.getUrlImg(target.currentSrc));
	}

	return (
		<>
			<section className={s.wrapper}>
				<h1 className={s.title}>Галерея</h1>
				{!showModal && (
					<div className={s.wrapper__cards}>
						{gallary.map((item) => {
							return (
								<div className={s.card}>
									<img onClick={onHandleClick} src={item.url} alt="img" />
									<p>{item.title}</p>
								</div>
							);
						})}
					</div>
				)}
			</section>
			{showModal && <ModalWindow />}
		</>
	);
};
export default Gallary;
