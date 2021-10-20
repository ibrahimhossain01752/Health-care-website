import React, { useEffect, useState } from 'react';
import Aboutus from './Aboutus';

const Aboutsus = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => setAbouts(data))
    }, [])
    return (
        <div>
            {
                abouts.map(about => <Aboutus
                    key={about}
                    about={about}
                ></Aboutus>)
            }
        </div>
    );
};

export default Aboutsus;