import React, { useState } from 'react';
import s from './Gallery.module.css';

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
	const [urlImg, setUrlImg] = useState(null);
	const [showModal, setShowModal] = useState(false);

	function onHandleClick({ target }) {
		setUrlImg(target.currentSrc);
		setShowModal(true);
	}

	return (
		<section className={s.wrapper}>
			<h1>Галерея</h1>
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
		</section>
	);
};
export default Gallary;
