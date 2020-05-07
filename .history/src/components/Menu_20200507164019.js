import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';

import TopMenu from './TopMenu';
import Header from './Header';
import Footer from './Footer';
import CommorativePictures from './CommorativePictures';
import SwingCheck from './SwingCheck';

const Menu = () => {
    return(
        <>
        <Header />
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary">写真</button>
            <button className="btn btn-success">動画</button>
        </div>
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