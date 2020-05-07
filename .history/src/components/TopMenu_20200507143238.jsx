import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const TopMenu = () => {
    return(
        <Router>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary">写真</button>
            <button className="btn btn-success">動画</button>
        </div>
        </Router>
    );
}

export default TopMenu;