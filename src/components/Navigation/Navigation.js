import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DropMenu from '../DropMenu/DropMenu';
import s from './Navigation.module.css';
import styles from './NavigationStyle.js';
import routes from '../../routes.js';
import { isMobileScreen } from '../helpers/wideScreen.js';

const Navigation = ({ menu }) => {
	const mobileScreen = isMobileScreen();
	const [isShowNav, setIsShowNav] = useState(true);

	useEffect(() => {
		if (!mobileScreen) setIsShowNav(false);
	}, []);

	function onHandleHideMenu() {
		setIsShowNav((prevState) => !prevState);
	}

	return (
		<div>
			{!mobileScreen && <DropMenu onHandleHideMenu={onHandleHideMenu} />}
			{isShowNav && (
				<nav className={s.list}>
					{routes.map((route) => (
						<div className={s.list__item}>
							<NavLink
								exact={route.exact}
								key={route.label}
								to={route.path}
								style={menu === 'footer' ? styles.footer.link : styles.header.link}
								activeStyle={styles.header.activeLink}
								className={s.nav}
							>
								{route.label}
							</NavLink>
						</div>
					))}
				</nav>
			)}
		</div>
	);
};

export default Navigation;
