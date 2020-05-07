import React from 'react';
import { Link } from 'react-router-dom'

const TopMenu = () => {
    return(
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary">写真</button>
            <button className="btn btn-success">動画</button>
        </div>
    );
}

export default TopMenu;