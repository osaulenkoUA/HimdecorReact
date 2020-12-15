import React from 'react';
import { Link } from 'react-router-dom';

const GroupItem = ({match}) => {
	console.log(match.params.id);
	return (
		<div>
			<h1>Продукція 1 групи</h1>
	<p>{match.params.id}</p>
		</div>
	);
};

export default GroupItem;
