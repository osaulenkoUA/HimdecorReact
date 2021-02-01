import React, { useState, useEffect } from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import GroupItem from '../GroupItem/GroupItem.js';
import s from './BarsOfGroup.module.css';

const BarsOfGroup = ({ match, location }) => {
	
	return (
		<div className={s.container}>
			{/* <ul className={s.aside__list}>
				{groupList.map((item) => (
					<li className={s.aside_item} key={item.id}>
						<NavLink
							activeClassName={s.itemLinkActiv}
							className={s.itemLink}
							to={`${match.url}/${item.id}`}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
			<Route path={`${match.path}/:id`} component={GroupItem} />
			{location.pathname==='/uk/shop' && <div className={s.groupList}></div>} */}
		</div>
	);
};

export default BarsOfGroup;
