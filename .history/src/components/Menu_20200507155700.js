import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import TopMenu from './TopMenu';
import Header from './Header';
import Footer from './Footer';
import CommorativePictures from './CommorativePictures';
import SwingCheck from './SwingCheck';

const Menu = () => {
    return(
        <>
        <Header />
        <Router>
            <Route exact path="/topmenu" component={TopMenu} /> 
            <Route exact path="/commorativepictures" component={CommorativePictures} />
            <Route exact path="/swingcheck" component={SwingCheck} />
        </Router>
        <Footer />
        </>
    );
}

export default Menu;