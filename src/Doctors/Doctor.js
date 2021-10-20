import React from 'react';

const Doctor = ({ doctor }) => {
    const { img, name, headof, experience } = doctor;
    return (
        <div className="card">
            <h5 className="card-header">Health Department</h5>
            <div className="card-body">
                <img style={{ width: "180px", height: "100px" }} src={img} alt="" />
                <h5 className="card-title">Name:{name}</h5>
                <h6 className="card-title">Head Of:{headof}</h6>
                <h6 className="card-title">Experience:{experience}</h6>


            </div>
        </div>
    );
};

export default Doctor;