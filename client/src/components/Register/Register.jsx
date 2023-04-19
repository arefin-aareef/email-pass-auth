import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {

    const [error, setError] = useState('')

    const [success, setSuccess] = useState('')

    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        if(!/(?=.*[A-Z])/.test(password)){
            setError('Add at least one uppercase letter')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('')
            event.target.reset();
            setSuccess('User Created Successfully')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
            setSuccess('');
        })
    }

    const handleEmailChange = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className='w-50 mx-auto border'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='w-50 mb-4 btn btn-primary' type="submit" value="Register" />
                <p className='text-danger'>{error}</p>
                <p className="text-success">{success}</p>
            </form>
        </div>
    );
};

export default Register;