import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';

import TopMenu from './TopMenu';
import Header from './Header';
import Footer from './Footer';

const Menu = () => {
    return(
        <>
        <Header />
        <TopMenu />
        <Footer />
        </>
    );
}

export default Menu;