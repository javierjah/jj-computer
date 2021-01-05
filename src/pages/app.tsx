import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Contact } from './index';
import Footer from '../components/footer';

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>LOADING...</div>}>
        <Switch>
          <Route path="/inicio">
            <Home />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
