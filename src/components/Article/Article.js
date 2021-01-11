import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import articlesOperation from '../../redux/articles/articlesOperation.js';

import s from './Article.module.css';

function PhoneBookView({match}) {
  const articles = useSelector(state => state.articles.articles);
console.log(match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articlesOperation.getArticles());
  }, []);

  return (
    <section className={s.wrapperArticls}>
      {articles.length > 0 && (
        <ul classNames={s.wrapperArticls__list}>
          {articles.map(article => {
            return (
              <li key={article.title} className={s.articlItem}>
                <img src={article.urlImage} />
                <h3 className={s.title}>{article.title}</h3>
                <p className={s.about}>{`${article.article.slice(0,340)}.....`}</p>
                <button className={s.button} type="button">
                  <a href="./needKnow-inside.html"> Дивитись далі</a>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default PhoneBookView;
