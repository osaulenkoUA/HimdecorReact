import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articlesOperation from '../../redux/articles/articlesOperation.js';
import routes from '../../routes.js';

import s from './OneArticle.module.css';
const OneArticle = ({ match, location, history }) => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articles.articles);

	const articleId = match.params.id;
	const currentArticle = articles.find((article) => article._id === articleId);
	useEffect(() => {
		dispatch(articlesOperation.getArticles());
    }, []);
    
    function backToList(){
        const {state}=location;
        if (state && state.from) {
            return history.push(state.from);
          }
          history.push(routes[3].path)
    }
	return (
		<>
			{currentArticle && (
				<section className={s.wrapper}>
					<img className={s.articlsImg} src={currentArticle.urlImage} alt="img" />

					<div className={s.articls__about}>
                    <button onClick={backToList} className={s.btnBack} >назад</button>

						<h2 className={s.articls__title}>{currentArticle.title}</h2>
						<p className={s.articls__text} >{currentArticle.article}</p>
					</div>
				</section>
			)}
		</>
	);
};

export default OneArticle;
