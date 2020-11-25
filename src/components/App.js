import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

import Head from './Head';


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
  </div>
);

export default App;
