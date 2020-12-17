import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';

const GroupItem = ( {match,history} ) => {
	const product = useSelector((state) => state.product.product);
	const filtered = product.filter((item) => item.group === match.params.id);

	// console.log("match",match);

	return (
		<div>
			{filtered.map((item) => (
				<>
					<Link to={`product/${item.matchurl}`}>
						<p>{item.name}</p>
					</Link>
				</>
			))}
	      <Route path={`${match.path}/:id`} component={ProductItem} />

		</div>
	);
};

export default GroupItem;
