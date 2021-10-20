import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { signInWithEmailAndPassword, updateProfile } from '@firebase/auth';


// const handleEmailChange = e => {
//     console.log(e.target.value);
// }

const Register = () => {
    const { handleNameSet, setName, name, email, password, auth, handleEmail, handlePassword, signInUsingGoogle } = useAuth();

    // used for privateRouter locations.
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    //signup with google.
    /* const handelGoogle = (e) => {
        e.preventDefault();
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    } */

    const SignInWithEmailandPassword = (e) => {
        e.preventDefault()
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //alert("Login success")

                history.push(redirect_uri)

                updateProfile(auth.currentUser, {
                    displayName: "Ibrahim"
                }).then((res) => {
                    console.log(res)
                }).catch((error) => {

                });
            })
            .catch((error) => {
                //alert("No user exist| ", error.code);
                console.log(error.code, error.message);
            })
        //console.log('clicked')
    }




    return (
        <div className="col-lg col-sm-12">
            <h2>Please Register</h2>

            <form onSubmit={SignInWithEmailandPassword} >
                <div className="col"><input type="text" className="form-control" name="first_name" onBlur={handleNameSet} placeholder="First Name" required="required" /></div>
                <label htmlFor="email"></label>
                <h4>Email:<input onBlur={handleEmail} type="email" name="" id="" /></h4>

                <label htmlFor="password"></label>
                <h4>Password:<input onBlur={handlePassword} type="password" name="" id="" /></h4>


                <input className="btn btn-success" type="submit" value="Register" />
                <br />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;