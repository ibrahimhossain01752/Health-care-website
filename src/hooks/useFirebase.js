import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.int";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleNameSet = e => {
        setName(e.target.value);
    }


    const SignInWithEmail = (e) => {
        e.preventDefault()
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                alert("Login success")
            })
            .catch((error) => {
                alert("No user exist| ", error.code);
                //console.log(error.code);
            })
        console.log('clicked')
    }


    //observe use state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        SignInWithEmail,
        setEmail,
        setPassword,
        handleEmail,
        handlePassword,
        auth,
        email,
        password,
        name,
        setName,
        handleNameSet
    }
}

export default useFirebase;