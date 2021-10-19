import React from 'react';

const Provide = ({ provide }) => {
    const { title, description, img } = provide;
    return (
        <div className="col-lg-4 col-sm-12 p-5">
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-text">{description}</h6>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Provide;