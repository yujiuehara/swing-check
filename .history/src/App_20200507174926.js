import React,{ useState }from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './asset/style.css';

import Menu from './components/Menu';
import Login from './components/Login';
import CommorativePictures from './components/CommorativePictures';
import SwingCheck from './components/SwingCheck';

const App = () => {

  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/commorativepictures" component={CommorativePictures} />
        <Route exact path="/swingcheck" component={SwingCheck} />
      </Router>
    </div>
  );
}

export default App;
