import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const SwingCheck = () => {
    return(
        <>
        <Header />
        <h1>スイングチェック</h1>
        <div className="d-flex justify-content-center">
            <Link to="/commorativepictures"><button className="btn btn-primary">写真</button></Link>
        </div>
        <Footer />
        </>
    );
}

export default SwingCheck;