import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import OneArticle from './OneArticle/OneArticle.js';

import productsOperation from '../redux/products/productsOperation.js';
import routes from '../routes.js';
import Section from './Section/Section.js';

import './App.module.css';
import AddProductView from "../views/AddProduct/AddProductView";

function App() {
  const pathForEnterAdmin = window.location.pathname === '/admin';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperation.getProduct());
  }, []);
  return (
    <BrowserRouter>
      {!pathForEnterAdmin && (
        <Section>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route => {
                if (route.isShowNav)
                  return <Route key={route.path} {...route} />;
              })}
              <Route
                path={`/articles/:id`}
                exact={false}
                component={OneArticle}
              />
              <Route path={'/add'} exact={false} component={AddProductView}/>
            </Switch>
          </Suspense>
        </Section>
      )}8
      {pathForEnterAdmin && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map(route => {
              if (!route.isShowNav)
                return <Route key={route.path} {...route} />;
            })}
          </Switch>
        </Suspense>
      )}

    </BrowserRouter>
  );
}

export default App;
