import React from 'react';

const Aboutus = ({ about }) => {
    const { title, description } = about;
    return (
        <div className="card w-75 mb-5 mx-auto">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-text">{description}</h6>

            </div>
        </div>

    );
};

export default Aboutus;