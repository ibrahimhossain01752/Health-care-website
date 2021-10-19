import React from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../images/notfound/5203299.jpg'

const NotFound = () => {
    return (
        <div className="w-25 justify-content-center">
            <img src={notfound} class="img-fluid" alt="..."></img>
            <br />
            <Link to="/">
                <button className="btn btn-success">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;