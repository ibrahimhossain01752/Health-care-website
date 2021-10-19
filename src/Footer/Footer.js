import React from 'react';

const Footer = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 bg-dark mt-5 fixed-sticky">
            <div className="col">
                <div className=" h-100">

                    <div className="card-body">
                        <h5 style={{ color: "white" }} className="card-title mt-2 ">Health Care</h5>
                        <p style={{ color: "white" }} className="card-text text-align-center p-5 py-3 ">Basic health services means those health services, including as a minimum, but not limited to, emergency care, inpatient hospital and physician care</p>

                        <a style={{ fontSize: "40px", marginRight: "6px" }} href="/facebook"><i class="fab fa-facebook-square"></i></a>
                        <a style={{ fontSize: "40px", marginRight: "6px" }} href="/instagram"><i class="fab fa-instagram-square"></i></a>
                        <a style={{ fontSize: "40px", marginRight: "6px" }} href="/twiter"><i class="fab fa-twitter-square"></i></a>

                    </div>

                </div>
            </div>
            <div className="col">
                <div className=" h-100">

                    <div className="card-body">
                        <h6 style={{ color: "white" }} className="card-title">Home</h6>
                        <h6 style={{ color: "white" }} className="card-title">Services</h6>
                        <h6 style={{ color: "white" }} className="card-title">Login</h6>
                        <h6 style={{ color: "white" }} className="card-title">Register</h6>
                        <h6 style={{ color: "white" }} className="card-title">Logout</h6>

                    </div>

                </div>
            </div>
            <div className="col">
                <div className=" h-100">

                    <div className="card-body">
                        <h5 style={{ color: "white", marginRight: "55px" }} className="card-title p-2"><i style={{ fontSize: "20px", color: "violet" }} class="fas fa-id-card-alt"></i>Contact Info</h5>
                        <h6 style={{ color: "white", marginRight: "20px" }}><i style={{ fontSize: "20px", color: "violet" }} class="fas fa-phone-square-alt"></i>Phone:+1 (212)-695-1962</h6>
                        <h6 style={{ color: "white", marginRight: "10px" }}><i style={{ fontSize: "20px", color: "violet", }} class="fas fa-map-marker-alt"></i>Location: Dhaka, Bangladesh</h6>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;