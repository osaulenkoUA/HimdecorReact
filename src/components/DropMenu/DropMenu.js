import React from 'react';
import s from './DropMenu.module.css';

import DropDownMenu from '../assets/dropDownMenu/dropDownMenuSVG.js';

const DropMenu = ({ onHandleHideMenu }) => {
	return (
		<div className={s.wrapSvg} onClick={onHandleHideMenu}>
			<span>МЕНЮ</span>
			<DropDownMenu />
		</div>
	);
};

export default DropMenu;
