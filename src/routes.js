import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'про компанію',
    exact: true,
    component: lazy(() => import('./views/PhoneBookHome/PhoneBookHome.js')),
  },
  {
    path: '/register',
    label: 'продукція',
    exact: true,
    component: lazy(() => import('./components/SignUp/SignUp.js')),
  },
  {
    path: '/login',
    label: 'прайс',
    exact: true,
    component: lazy(() => import('./components/SignIn/SignIn.js')),
  },
  {
    path: '/books',
    label: 'статті',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView/PhoneBookView.js')),
  },
  {
    path: '/books',
    label: 'галерея',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView/PhoneBookView.js')),
  },
  {
    path: '/books',
    label: 'контакти',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView/PhoneBookView.js')),
  },
];
