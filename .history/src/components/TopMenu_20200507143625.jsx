import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CommorativePictures from './CommorativePictures';
import SwingCheck from './SwingCheck';

const TopMenu = () => {
    return(
        <Router>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary">
                <Route path='/commorativepictures' component={CommorativePictures} />
            </button>
            <button className="btn btn-success">
                <Route path='/swingcheck' component={SwingCheck} />
            </button>
        </div>
        </Router>
    );
}

export default TopMenu;