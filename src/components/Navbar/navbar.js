import React from "react"
import './navbar.css'
function Navbar(){
    return(
      <nav>
			
		<div className="logo">Okhati</div>
		<div className="nav-items">
			<div className="nav-item">Home</div>
			<div className="nav-item">Services</div>
			<div className="nav-item">Contact</div>
			<div className="nav-item">About Us</div>
		</div>
		<div className="items">
			<div><a href="https://www.facebook.com/eOkhati"><i className="fa fa-facebook-f" style={{color:"white"}}></i></a></div>
			<div><a href="https://www.instagram.com/okhati_health/"><i className="fa fa-instagram" style={{color:"white"}}></i></a></div>
			<div><a href="https://www.youtube.com/channel/UCn7YbsKxsp0a5XiFmaG2IQQ"><i className="fa fa-youtube" style={{color:"white"}}></i></a></div>	
	</div>
	
	
	
	</nav>

    )
}
export default Navbar