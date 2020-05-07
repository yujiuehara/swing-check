import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    return(
        <div className="d-flex justify-content-center">
            <Link to="/commorativepictures"><button className="btn btn-primary">写真</button></Link>
            <Link to="/swingcheck"><button className="btn btn-success">動画</button></Link>
        </div>
    );
}

export default TopMenu;