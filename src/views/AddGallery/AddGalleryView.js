import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import galleryOperation from '../../redux/gallery/galleryOperation.js';

import s from './AddGallery.module.css';

function AddGallery() {
	const [title, setTitle] = useState('');
	const [urlImage, setUrlImage] = useState('');

	const dispatch = useDispatch();

	const updateTitle = ({ target }) => setTitle(target.value);
	const updateUrlImage = ({ target }) => setUrlImage(target.value);

	function handleSubmit(e) {
		e.preventDefault();
		const obj = {
			title,
			urlImage,
		};
		dispatch(galleryOperation.addGallery(obj));
		setTitle('');
		setUrlImage('');
	}
	return (
		<>
			{!false && (
				<div>
					<h2>ADD IMAGE to Gallery</h2>
					<form onSubmit={handleSubmit} className={s.form}>
						<label className={s.form__label}>
							Title:
							<input
								className={s.form__input}
								type="text"
								value={title}
								onChange={updateTitle}
								name="email"
							/>
						</label>

						<label className={s.form__label}>
							URL Image:
							<input
								className={s.form__input}
								type="text"
								value={urlImage}
								onChange={updateUrlImage}
								name="password"
							/>
						</label>

						<button type="submit" className={s.form__btn}>
							Add to Gallery
						</button>
					</form>
				</div>
			)}
		</>
	);
}

export default AddGallery;
