import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import productsOperation from '../redux/products/productsOperation.js';
import routes from '../routes.js';
import Section from './Section/Section.js';

function App() {

	const dispatch=useDispatch();

	useEffect(() => {
		dispatch(productsOperation.getProduct());
	}, []);
	return (
		<BrowserRouter>
			<Section>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Switch>
						{routes.map((route) => (
							<Route key={route.path} {...route} />
						))}
					</Switch>
				</Suspense>
			</Section>
		</BrowserRouter>
	);
}

export default App;
