import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownMenu from '../assets/dropDownMenu/dropDownMenu.js';
import s from './Navigation.module.css';
import styles from './NavigationStyle.js';
import routes from '../../routes.js';

const Navigation = ({ menu }) => {
  return (
    <div>
      <DropDownMenu />
      <nav className={s.list}>
        {routes.map(route => (
          <div className={s.list__item}>
            <NavLink
              exact={route.exact}
              key={route.label}
              to={route.path}
              style={
                menu === 'footer' ? styles.footer.link : styles.header.link
              }
              activeStyle={styles.header.activeLink}
              className={s.nav}
            >
              {route.label}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
