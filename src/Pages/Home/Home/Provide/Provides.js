import React, { useEffect, useState } from 'react';
import Provide from './Provide';

const Provides = () => {
    const [provides, setProvides] = useState([])
    useEffect(() => {
        fetch('provide.json')
            .then(res => res.json())
            .then(data => setProvides(data))
    }, [])
    return (
        <div>
            <h2 style={{ color: "orange" }}>Why Chose Us</h2>
            <div className="row">
                {
                    provides.map(provide => <Provide
                        key={provide}
                        provide={provide}

                    ></Provide>)
                }
            </div>
        </div>
    );
};

export default Provides;