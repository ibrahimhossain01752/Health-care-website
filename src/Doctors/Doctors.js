import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            {
                doctors.map(doctor => <Doctor
                    key={doctor}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;