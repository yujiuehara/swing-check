import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './asset/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TopMenu from './components/TopMenu';
import CommorativePictures from './components/CommorativePictures';
import SwingCheck from './components/SwingCheck';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <TopMenu />
      <Footer />
    </div>
  );
}

export default App;
