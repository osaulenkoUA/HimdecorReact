import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import GroupItem from '../GroupItem/GroupItem.js';
import BarsOfGroup from './BarsOfGroup.js';
import { isMobileScreen } from '../helpers/wideScreen.js';

import s from './GroupProduct.module.css';
import groupList from './groupList.js';

const GroupProduct = ({ match, location }) => {
	const mobileScreen = isMobileScreen();
	return (
		<div className={s.aside}>
			<ul className={s.aside__list}>
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
			{location.pathname === '/uk/shop' && mobileScreen && <BarsOfGroup />}
		</div>
	);
};

export default GroupProduct;
