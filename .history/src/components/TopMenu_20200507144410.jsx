import React from 'react';
import { Link } from 'react-router-dom'



const TopMenu = () => {
    return(
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary"><Link to="/commorativepictures">写真</Link></button>
            <button className="btn btn-success"><Link to="/swingcheck">動画</Link></button>
        </div>
    );
}

export default TopMenu;