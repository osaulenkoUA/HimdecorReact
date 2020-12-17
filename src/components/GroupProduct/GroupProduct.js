import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import GroupItem from '../GroupItem/GroupItem.js';
import s from './GroupProduct.module.css';

const groupList = [
  {
    id: 'клей-пва',
    name: 'клей',
  },
  {
    id: 'інтерєрні-фарби',
    name: 'інтер`єрні фарби',
  },
  {
    id: 'фасадні-фарби',
    name: 'фасадні фарби',
  },
  {
    id: 'грунтівка',
    name: 'грунтівки',
  },
  {
    id: 'декоративні-фарби',
    name: 'декоративні та по дереву',
  },
  {
    id: 'лаки-акрилові',
    name: 'лаки та лазурі',
  },
  {
    id: 'шпатлівки-по-дереву',
    name: 'акрилова шпаклівка',
  },
  {
    id: 'декоративні-штукатурки',
    name: 'декоративні штукатурки',
  },
];

const GroupProduct = ({ match }) => {
  return (
    <div className={s.aside}>
      <ul className={s.aside__list}>
        {groupList.map(item => (
          <li className={s.aside_item} key={item.id}>
            <Link
              activeClassName={s.itemLink}
              to={`${match.url}/${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:id`} component={GroupItem} />
      
    </div>
  );
};

export default GroupProduct;
