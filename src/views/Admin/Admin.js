import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes.js';

import s from './Admin.module.css';

const Admin = () => {
  const date = new Date();
  const currentDay = date.getDate();
  const pass = currentDay + 'dlink500';
  const [inputVal, setInputVal] = useState('');
  const [isShowAdminNav, setIsShowAdminNav] = useState(false);

  function onHandleClick(e) {
    const key = e.key === 'Enter';
    if (key) {
      if (pass === e.target.value) {
        setIsShowAdminNav(true);
        setInputVal('');
      } else setInputVal('');
    }
  }

  function onHandleChange({ target }) {
    setInputVal(target.value);
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Admin`ka</h2>

      <label>
        Password
        <input
          onChange={onHandleChange}
          value={inputVal}
          onKeyPress={onHandleClick}
          type="password"
        ></input>
      </label>

      {isShowAdminNav && (
        <nav className={s.list}>
          {routes.map(route => {
            if (!route.isShowNav) {
              return (
                <div key={route.path} className={s.list__item}>
                  <NavLink
                    exact={route.exact}
                    key={route.label}
                    to={route.path}
                    // className={s.nav}
                  >
                    {route.label}
                  </NavLink>
                </div>
              );
            }
          })}
        </nav>
      )}
    </div>
  );
};

export default Admin;
