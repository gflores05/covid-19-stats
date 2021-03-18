import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import { Stats } from './stats';
import { Layout } from './hoc';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Layout>
        <Switch>
          <Route path="/" exact component={Stats}></Route>
        </Switch>
      </Layout>
    </Switch>
  );
}

export default App;
