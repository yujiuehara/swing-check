import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const CommorativePictures = () => {
    return(
        <>
        <Header />
        <div className="container">
            <h1>記念写真</h1>
            <div className="d-flex justify-content-end">
                <Link to="/swingcheck"><button className="btn btn-success">動画</button></Link>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default CommorativePictures;