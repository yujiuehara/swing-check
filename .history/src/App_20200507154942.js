import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './asset/style.css';

import Menu from './components/Default';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/default" component={Default} />
      </Router>
    </div>
  );
}

export default App;
