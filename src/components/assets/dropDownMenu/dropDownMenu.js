import React from 'react';

import s from './dropDownMenu.module.css';

const dropDownMenu = () => {
  return (
    <svg
      width="44"
      height="32"
	  viewBox="0 0 44 32"
	  className={s.svgLightTheme}
    >
      <title>menu2</title>
      <path d="M0 6h28v6h-28v-6zM0 14h28v6h-28v-6zM0 22h28v6h-28v-6z"></path>
      <path d="M31 18l6 6 6-6z"></path>
      <path d="M43 16l-6-6-6 6z"></path>
    </svg>
  );
};

export default dropDownMenu;

{
  /* <svg className={s.svgLightTheme} width="25" height="25" viewBox="0 0 32 32">
			<title>delete-contact</title>
			<path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
		</svg> */
}
