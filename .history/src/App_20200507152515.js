import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './asset/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import CommorativePictures from './components/CommorativePictures';
import SwingCheck from './components/SwingCheck';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/top" component={Menu} />
        <Route exact path="/commorativepictures" component={CommorativePictures} />
        <Route exact path="/swingcheck" component={SwingCheck} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
