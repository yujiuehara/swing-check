import React from 'react';

import './asset/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TopMenu from './components/TopMenu';

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
