import { lazy } from 'react';

export default [
	{
		path: '/',
		label: 'про компанію',
		exact: true,
		component: lazy(() => import('./views/About/AboutView.js')),
	},
	{
		path: '/uk/shop',
		label: 'продукція',
		exact: true,
		component: lazy(() => import('./views/Products/ProductsView.js')),
	},
	{
		path: '/price',
		label: 'прайс',
		exact: true,
		component: lazy(() => import('./views/Price/PriceView.js')),
	},
	{
		path: '/articles',
		label: 'статті',
		exact: true,
		component: lazy(() => import('./views/Articles/ArticlesView.js')),
	},
	{
		path: '/gallery',
		label: 'галерея',
		exact: true,
		component: lazy(() => import('./views/Gallery/GalleryView.js')),
	},
	{
		path: '/contacts',
		label: 'контакти',
		exact: true,
		component: lazy(() => import('./views/Contact/ContactView.js')),
	},
];
