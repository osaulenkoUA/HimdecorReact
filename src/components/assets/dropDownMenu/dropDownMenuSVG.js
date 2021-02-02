import React from 'react';

import s from './dropDownMenuSVG.module.css';

const dropDownMenuSVG = () => {
	return (
		<svg width="44" height="32" viewBox="0 0 44 32" className={s.svgLightTheme}>
			<title>menu2</title>
			<path d="M0 6h28v6h-28v-6zM0 14h28v6h-28v-6zM0 22h28v6h-28v-6z"></path>
			<path d="M31 18l6 6 6-6z"></path>
			<path d="M43 16l-6-6-6 6z"></path>
		</svg>
	);
};

export default dropDownMenuSVG;
