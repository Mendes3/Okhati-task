import React from "react";
import {Link} from 'react-router-dom';
import './home.css';
function Home(){
    return(
        <>
         <section className="welcome">
		
		<div className="text-area">
		<div className="home-title">Deliver Modern Healthcare with Okhati</div>
        <div className="sub-title">
            <p>Okhati suite comprises of a bunch of smart solutions made for clinics, labs and 
        & hospitals that consists of EMR, patient-flow management, billing, reporting, bulk-messaging, app engagement and much more.</p>
          <p>We will call you back to tell you more about Okhati suite.</p>
          
            </div>
            <div className="submit-button">
              <div className="input-box"><input type='text' placeholder="Enter your phone number" className="input-phone"></input></div>
              <button type="submit" className="button-phone">Submit</button>

              </div>

		</div>
        <div className="image-area">
			<img src="/herbs.jpeg" alt="green-herb"></img>
            <div className="sign-out">
                <div>Want to Sign out?</div>
                <Link to='/'>Click here</Link>
                </div>
		</div>
	</section>
        </>

    )
}
export default Home;