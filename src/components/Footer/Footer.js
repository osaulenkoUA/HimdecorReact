import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Social from '../Social/Social.js';

import s from './Footer.module.css';
function Header() {
	return (
		<div className={s.container}>
			<div className={s.footer}>
				<Navigation menu="footer" />
				<Social />
			</div>
		</div>
	);
}

export default Header;
