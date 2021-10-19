import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="col-lg col-sm-12">
            <h2>Please Register</h2>
            <form>
                <h4>Email:<input type="email" name="" id="" /></h4>
                <h4>Password:<input type="password" name="" id="" /></h4>

                <input className="btn btn-success" type="submit" value="Submit" />
                <br />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;