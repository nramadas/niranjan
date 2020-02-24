import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider, createClient } from 'urql';

import Admin from './components/pages/Admin/async';
import Blog from './components/pages/Blog/async';
import Root from './components/pages/Root/async';

const gqlClient = createClient({
  url: process.env.API_URL || 'http://localhost:4000',
});

const App: React.FC = () => {
  return (
    <Provider value={gqlClient}>
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
        <Route exact path={['/blog', '/blog/:id/:title']}>
          <Blog />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Provider>
  );
};

export default App;
