import React, { useState } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const History= useHistory();


    const submitForm = (e)=>{
        const storeduser = localStorage.getItem('username');
        const storedpass = localStorage.getItem('password');
        console.log(storedpass)
        if (username === storeduser){
            if (password === storedpass){
                alert('Login successful');
                History.push('/home');

            }
        }
        else {
            alert('Username and password doesnot match')
        }
    

    }
    return(
        <section className="login">
        <form onSubmit={submitForm} className="form">
            <div className="input">
                <p>Username:</p>
                <input type="text" placeholder="Enter your username" value = {username} onChange={(e)=>setUsername(e.target.value)}></input>
            </div>
            <div className="input">
                <p>Password:</p>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div className="btn">
                <button type="submit">Login</button>
            </div>    
                <div> Not a member? <Link to ="/register">Register</Link></div>
        </form>
        </section>
    )
    
}
export default Login