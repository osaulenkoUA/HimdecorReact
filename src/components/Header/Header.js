import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';

import s from './Header.module.css'
function Header() {
	return (
		<div className={s.container}>
			<Logo />
			<Navigation menu='header'  />
		</div>
	);
}

export default Header;
