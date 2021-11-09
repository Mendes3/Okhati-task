import React from "react";
import './register.css'
import {Link} from 'react-router-dom'

function Register(){
    return(
        <section className="register">
        <div className="title">Please enter the following details to register.</div>
        <div className="register-form">
            <div className="input">
                <p>Username:</p>
                <input type="text" placeholder="Enter your username"></input>
            </div>
            <div className="input">
                <p>Password:</p>
                <input type="text" placeholder="Enter your password"></input>
            </div>
            <div className="input">
                <p>Email id:</p>
                <input type="email" placeholder="Enter your email id"></input>
            </div>
            <div className="input">
                <p>Mobile no:</p>
                <input type="number" placeholder="Enter your contact number"></input>
            </div>
            <div className="input">
                <p>Address:</p>
                <input type="text" placeholder="Enter your address"></input>
            </div>
            <div className="btn">
                <button type="submit">
                    <Link to='/' className="link">Register</Link>
                </button>
            </div>    
        </div>
    </section>
    )
}
export default Register