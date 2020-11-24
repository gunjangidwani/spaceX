import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import asyncComponent from './AsyncComponent';

import Head from './Head';

// const LoadableHome = Loadable({
//   loader: () => import(/* webpackChunkName: 'home' */ './Home'),
//   loading: () => <div>Loading...</div>
// });

const LoadableHome = asyncComponent(() => 
  import('./Home').then(module => module.default)
)

const App = () => (
  <div className="app">
    <Head />
    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
      </Switch>
    </main>
    <footer />
  </div>
);

export default App;
