import React from 'react';
import { Route, Link } from 'react-router-dom';


import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="protected">Friends Page</Link>
      </nav>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Friends} />
    </div>
  );
}

export default App;
