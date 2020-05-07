import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CommorativePictures from './CommorativePictures';
import SwingCheck from './SwingCheck';


const TopMenu = () => {
    return(
        <Router>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary">写真
                <Route path='/commorativepictures' component={CommorativePictures} />
            </button>
            <button className="btn btn-success">動画
                <Route path='/swingcheck' component={SwingCheck} />
            </button>
        </div>
        </Router>
    );
}

export default TopMenu;