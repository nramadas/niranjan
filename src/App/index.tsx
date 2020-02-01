import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Root from './components/pages/Root/async';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Root />
      </Route>
    </Switch>
  );
};

export default App;
