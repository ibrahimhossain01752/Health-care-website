import React from 'react';
import { Link } from 'react-router-dom';


const handleEmailChange = e => {
    console.log(e.target.value);
}

const Register = () => {
    const handleRegistration = e => {
        console.log("registreion");
        e.preventDefault();
    }
    return (
        <div className="col-lg col-sm-12">
            <h2>Please Register</h2>
            <form onSubmit={handleRegistration}>
                <label htmlFor="email"></label>
                <h4>Email:<input onChange={handleEmailChange} type="email" name="" id="" /></h4>

                <label htmlFor="password"></label>
                <h4>Password:<input type="password" name="" id="" /></h4>


                <input className="btn btn-success" type="submit" value="Register" />
                <br />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;