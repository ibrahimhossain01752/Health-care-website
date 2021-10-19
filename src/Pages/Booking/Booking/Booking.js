import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const [servicess, setServicess] = useState([])
    useEffect(() => {
        fetch('/servicesDetails.json')
            .then(res => res.json())
            .then(data => setServicess(data))
    }, [])


    const foundService = servicess.find(service => service.id === id)




    return (
        <div className="details col">
            <img className="w-25" src={foundService?.img} alt="" />
            <h2>Name:{foundService?.name}</h2>
            <h5>Visit Fee:{foundService?.visitFee}</h5>
            <h5>Contact:{foundService?.contact}</h5>
        </div>

    );
};

export default Booking;

/*

<div className="details col">
                <img className="w-25" src={foundService?.img} alt="" />
                <h2>Name:{foundService?.name}</h2>
                <h5>Visit Fee:{foundService?.visitFee}</h5>
                <h5>Contact:{foundService?.contact}</h5>
            </div>

*/