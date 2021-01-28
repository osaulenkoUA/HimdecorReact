import React, { useEffect } from 'react';
import s from './Gallery.module.css';
import galleryActions from '../../redux/gallery/galleryActions.js';
import galleryOperation from '../../redux/gallery/galleryOperation.js';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow.js';



const Gallary = () => {
	const dispatch = useDispatch();
	const showModal = useSelector((state) => state.gallery.isShowModal);
	const gallary = useSelector((state) => state.gallery.gallery);
	console.log(gallary[0]);
	useEffect(() => {
		dispatch(galleryOperation.getGallery());
	}, []);

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
									<img onClick={onHandleClick} src={item.urlImage} alt="img" />
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
