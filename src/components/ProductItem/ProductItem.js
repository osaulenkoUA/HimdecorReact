import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsOperation from '../../redux/products/productsOperation.js';
import routes from '../../routes.js';

import s from './ProductItem.module.css';
let arrFasovka;
const ProductItem = ({ match, history, location }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsOperation.getProduct());
	}, []);

	const products = useSelector((state) => state.product.product);
	const item = products.find((item) => item.matchurl === match.params.id);
	if (products.length > 0) arrFasovka = item.fasovka.split('-');
	//   console.log(item);

	function backToList() {
		const { state } = location;
		if (state && state.from) {
			return history.push(state.from);
		}
		history.push(routes[1].path);
	}

	return (
		<>
			{products.length > 0 && (
				<>
					<button onClick={backToList} className={s.btnBack}>
						назад
					</button>

					<div className={s.wrapProduct}>
						<div className={s.containetImg}>
							<img className={s.imgProduct} src={item.urlimage} />
						</div>
						<div className={s.productInfo}>
							<h1 className={s.productInfo__name}>{item.name}</h1>

							<p className={s.productInfo__weight}>ФАСОВКА:</p>
							<ul className={s.listWeight}>
								{arrFasovka.map((item) => (
									<li className={s.listWeight__item}>
										<p>{item}кг</p>
									</li>
								))}
							</ul>

							<p className={s.productInfo__sklad}>СКЛАД:</p>
							<span className={s.productInfo__skladText}>{item.sklad}</span>

							<p className={s.productInfo__time}>ЧАС ВИСИХАННЯ:</p>
							<span className={s.productInfo__timeText}>{item.time}</span>

							{item.vutratu && (
								<>
									<p className={s.productInfo__vutratu}>ВИТРАТИ:</p>
									<span className={s.productInfo__vutratuText}>{item.vutratu}</span>
								</>
							)}

							<p className={s.productInfo__thinner}>РОЗРІДЖУВАЧ:</p>
							<span className={s.productInfo__thinnerText}>{item.solvent}</span>

							<p className={s.productInfo__wereuse}>ВИД РОБІТ:</p>
							<span className={s.productInfo__wereuseText}>{item.vudurobit}</span>

							<div className={s.productInfo__links}>
								<a href={item.buyurl} className={s.toBuy}>
									Де купити
								</a>
								<a href="#" className={s.sertufikat}>
									СЕРТИФІКАТИ
								</a>
							</div>

							<div className={s.productInfo__prepare}>
								<h3 className={s.productInfo__prepareTitle}>Властивості:</h3>
								<p> {item.vlastuvosti}</p>
							</div>

							<div className={s.productInfo__prepare}>
								<h3 className={s.productInfo__prepareTitle}>Підготовка ПОВЕРХНІ:</h3>
								<p>{item.pidgotovka}</p>
							</div>

							<div className={s.productInfo__use}>
								<h3 className={s.productInfo__useTitle}>Спосіб нанесення:</h3>
								<p>{item.nanesennya}</p>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ProductItem;
