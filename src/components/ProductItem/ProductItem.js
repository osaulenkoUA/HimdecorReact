import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = ({ match }) => {
	const product = useSelector((state) => state.product.product);
	// const filtered = product.filter((item) => item.group === match.params.id);

	console.log("producr match",product);
	const item=product.find(item=>item.matchurl===match.params.id);
	console.log(item);

	return (
		<div>
			<h1>ProductItem</h1>
			
		</div>
	);
};

export default ProductItem;
