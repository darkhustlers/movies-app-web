import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import TV from './pages/TV';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.MOVIE} component={Movie} />
        <Route exact path={ROUTES.TV} component={TV} />
        <Route exact path={ROUTES.SEARCH} component={Search} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
