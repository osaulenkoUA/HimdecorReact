import React from 'react';
import Facebook from '../assets/Facebook/Facebook';
import Youtube from '../assets/Youtube/Youtube';
import Insta from '../assets/Insta/Insta';


import s from './Social.module.css';
function UserMenu() {
	return (
		<div className={s.wrapper}>
			<a href="#">
				<img src="./images/facebook-icon.png" alt="" />
				<Facebook />
			</a>
			<a href="#">
				<img src="./images/Youtube.png" alt="" />
				<Youtube />
			</a>
			<a href="#">
				<img src="./images/Youtube.png" alt="" />
				<Insta />
			</a>
			<p className={s.wrap__text}>
				Всі права захищені 2020
			</p>
		</div>
	);
}

export default UserMenu;
