import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const GroupItem = ({ match }) => {
	const product = useSelector((state) => state.product.product);
	const filtered = product.filter((item) => item.group === match.params.id);

	console.log(filtered);

	return (
		<div>
			<h1>{match.params.id}</h1>
			{filtered.map((item) => (
				<>
					<Link to={item.matchurl}>
						<p>{item.name}</p>
					</Link>
				</>
			))}
		</div>
	);
};

export default GroupItem;
