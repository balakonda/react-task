import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import PageHeader from './Components/Header/Header';
import useStyles from './Helper/GlobalJss';
import PrivateRoute from './Helper/PrivateRoute';

const App = () => {
  // Global CSS
  useStyles();

  return (
    <Router>
      <PageHeader />
      <main>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
          <Route path="*" component={Login} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;
