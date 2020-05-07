import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './asset/style.css';

import Menu from './components/Menu';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={menu} />
        {/* <Route exact path="/menu" component={Menu} />
        <Route exact path="/commorativepictures" component={CommorativePictures} />
        <Route exact path="/swingcheck" component={SwingCheck} /> */}
      </Router>
    </div>
  );
}

export default App;
