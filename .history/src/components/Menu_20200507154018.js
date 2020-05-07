import React from 'react';
import TopMenu from './TopMenu';
import Header from './Header';
import Footer from './Footer';

const Menu = () => {
    return(
        <Router>
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/commorativepictures" component={CommorativePictures} />
            <Route exact path="/swingcheck" component={SwingCheck} />
        </Router>
    );
}

export default Menu;