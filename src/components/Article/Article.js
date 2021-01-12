import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import OneArticle from '../OneArticle/OneArticle.js';
import articlesOperation from '../../redux/articles/articlesOperation.js';

import s from './Article.module.css';

function PhoneBookView({ match,location}) {
	const articles = useSelector((state) => state.articles.articles);
  console.log(match);
  console.log(articles);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(articlesOperation.getArticles());
	}, []);

	return (
		<section className={s.wrapperArticls}>
			{articles.length > 0 && (
				<ul className={s.wrapperArticls__list}>
					{articles.map((article) => {
						return (
							<li key={article.title} className={s.articlItem}>
								<img src={article.urlImage} />
								<h3 className={s.title}>{article.title}</h3>
								<p className={s.about}>{`${article.article.slice(0, 340)}.....`}</p>
								<button className={s.button} type="button">
									<Link
										to={{
											pathname: `${match.url}/${article._id}`,
											state: { from: location },
										}}
									>
										Дивитися далі
									</Link>
								</button>
							</li>
						);
					})}
            {/* <Route path={`${match.path}/:id`}exact={false}  component={OneArticle} /> */}
				</ul>
			)}
            {/* <Route path={`${match.path}/:id`} component={OneArticle} /> */}
		</section>
	);
}

export default PhoneBookView;
{
	/* <Link
            style={{ textDecoration: 'none' }}
            key={item.id}
            to={{
              pathname: `product/${item.matchurl}`,
              state: { from: location },
            }}
          >
            
          </Link> */
}
