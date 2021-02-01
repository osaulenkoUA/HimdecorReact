import React from 'react';
import {  useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
import s from './GroupItem.module.css';

const GroupItem = ({ match, location }) => {
  const product = useSelector(state => state.product.product);
  const filtered = product.filter(item => item.group === match.params.id);
  return (
    <ul className={s.list}>
      {filtered.map(item => (
        <li className={s.list__item}>
          <Link
            style={{ textDecoration: 'none' }}
            key={item.id}
            to={{
              pathname: `product/${item.matchurl}`,
              state: { from: location },
            }}
          >
            <img className={s.list__img} src={item.urlimage} />
            <p className={s.list__name}>{item.name}</p>
          </Link>
        </li>
      ))}
      <Route path={`${match.path}/:id`} component={ProductItem} />
    </ul>
  );
};

export default GroupItem;
