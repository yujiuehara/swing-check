import React from 'react';

import Header from './Header';
import Footer from './Footer';

const CommorativePictures = () => {
    return(
        <>
        <Header />
        <h1>記念写真</h1>
        <div className="d-flex justify-content-center">
            <Link to="/swingcheck"><button className="btn btn-success">動画</button></Link>
        </div>
        <Footer />
        </>
    );
}

export default CommorativePictures;