import React, {useState} from "react";
import './register.css' 

import validation from "./validation";
import validationmsg from "./validationmsg";
// const bcrypt = require('bcrypt');
import {useHistory} from 'react-router-dom';

// import {Link} from 'react-router-dom';


function Register(){
    const [userRegistration, setUserRegistration]= useState(
        {
            username: "",
            password: ""
        }
    );
    const [errors, setErrors] = useState({});
    const History= useHistory();
    let newError = false;

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({...userRegistration, [name]:value})
        
    }
    const submitForm = (e)=>{
        e.preventDefault();

        setErrors(validationmsg(userRegistration));
        newError = validation(userRegistration);
        if (newError===false){
        // userRegistration.password = Bcrypt.hashSync(userRegistration.password, 10);

            localStorage.setItem('username',userRegistration.username);
            localStorage.setItem('password',userRegistration.password);
            History.push('/')

        }
        else{
            console.log(errors)
        }
    }
    return(
        <section className="register">
        <div className="title">Please enter the following details to register.</div>
        <form onSubmit={submitForm} className="register-form">
            <div className="input">
                <p>Username:</p>
                <input type="text" name="username" placeholder="Enter your username" value={userRegistration.username} onChange={handleInput}></input>
                {errors.username &&<p className="error">{errors.username}</p> }       
            </div>
            <div className="input">
                <p>Password:</p>
                <input type="password" name="password" placeholder="Enter your password" value={userRegistration.password} onChange={handleInput}></input>
                {errors.password &&<p className="error">{errors.password}</p> }       

            </div>
            <div className="input">
                <p>Confirm Password:</p>
                <input type="password" name="password" placeholder="Enter your password again" value={userRegistration.confirmpassword} onChange={handleInput}></input>
                {errors.confirmpassword &&<p className="error">{errors.confirmpassword}</p> }       

            </div>
            <div className="input">
                <p>Email id:</p>
                <input type="email" name="email" placeholder="Enter your email id"></input>
                {errors.email &&<p className="error">{errors.email}</p> }       

            </div>
            <div className="input">
                <p>Mobile no:</p>
                <input type="number" name="contactnum" placeholder="Enter your contact number"></input>
                {errors.contactnum &&<p className="error">{errors.contactnum}</p> }       

            </div>
            <div className="input">
                <p>Address:</p>
                <input type="text" name= "address" placeholder="Enter your address"></input>
                {errors.address &&<p className="error">{errors.address}</p> }       

            </div>
            <div className="btn">
                <button type="submit">Register</button>
            </div>    
        </form>
    </section>
    )
}
export default Register