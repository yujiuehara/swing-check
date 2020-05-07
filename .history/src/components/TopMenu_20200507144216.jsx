import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CommorativePictures from './CommorativePictures';
import SwingCheck from './SwingCheck';


const TopMenu = () => {
    return(
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary"><Link to="/">写真</Link></button>
            <button className="btn btn-success"><Link to="">動画</Link></button>
            </button>
        </div>
    );
}

export default TopMenu;