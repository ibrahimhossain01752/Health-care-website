import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="col-lg-4 col-sm-12 p-5 mb-5">
            <img className="image" src={img} alt="" />
            <h4>{name}</h4>
            <h6 className="p-5">{description}</h6>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-success">See Details</button>
            </Link>
        </div>
    );
};

export default Service;