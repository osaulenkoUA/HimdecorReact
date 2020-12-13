import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articlesOperation from '../../redux/articles/articlesOperation.js';

import s from './AddArticle.module.css';

function AddArticle() {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const dispatch = useDispatch();

  const updateEmail = ({ target }) => setTitle(target.value);
  const updatePassword = ({ target }) => setArticle(target.value);
  const updateUrlImage = ({ target }) => setUrlImage(target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      title,
      article,
      urlImage,
    };
    dispatch(articlesOperation.addArticle(obj));
    setTitle('');
    setArticle('');
  }
  return (
    <>
      {!false && (
        <div>
          <h2>ADD ARTICLE</h2>
          <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.form__label}>
              Title:
              <input
                className={s.form__input}
                type="text"
                value={title}
                onChange={updateEmail}
                name="email"
              />
            </label>

            <label className={s.form__label}>
              Article:
              <textarea
                rows={20}
                cols={20}
                className={s.form__input}
                // type="text"
                // value={article}
                onChange={updatePassword}
                name="password"
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
              to LogIn
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddArticle;
