import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2 className="text-danger">We Are Treatment</h2>
            <h6>We Are Provise Always Better Services</h6>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;