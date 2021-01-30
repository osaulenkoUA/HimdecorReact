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
		exact: false,
		// component: lazy(() => import('./views/Products/ProductsView.js')),
		component: lazy(() => import('./components/GroupProduct/GroupProduct')),
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
		// component: lazy(() => import('./views/Articles/ArticlesView.js')),
		component: lazy(() => import('./components/Article/Article.js')),
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
	{
		path: '/addarticles',
		label: 'addArticles',
		exact: true,
		component: lazy(() => import('./views/AddArticle/AddArticleView.js')),
	},
	{
		path: '/addproduct',
		label: 'addproduct',
		exact: true,
		component: lazy(() => import('./views/AddProduct/AddProductView.js')),
	},
	{
		path: '/addGallery',
		label: 'addGallery',
		exact: true,
		component: lazy(() => import('./views/AddGallery/AddGalleryView.js')),
	},
];
