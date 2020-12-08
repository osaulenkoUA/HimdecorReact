import React from 'react';
import logoImg from './LOGO-wide.png'
import s from './Logo.module.css';
function UserMenu() {
	return (
		<div className={s.wrapper}>
				<img src={logoImg} alt="logo" />
		</div>
	);
}

export default UserMenu;
