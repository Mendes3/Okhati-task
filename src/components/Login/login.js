import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
function Login(){
    return(
        <section className="login">
        <div className="form">
            <div className="input">
                <p>Username:</p>
                <input type="text" placeholder="Enter your username"></input>
            </div>
            <div className="input">
                <p>Password:</p>
                <input type="text" placeholder="Enter your password"></input>
            </div>
            <div className="btn">
                <button type="submit">
                    <Link to='/home' className="link">Login</Link>
                </button>
            </div>    
                <div> Not a member? <Link to ="/register">Register</Link></div>

               
        </div>
        </section>
    )
    
}
export default Login