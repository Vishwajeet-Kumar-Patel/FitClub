import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Address</h3>
            <a href="googlemaplink">Varanasi, Uttar Pradesh</a>
          </div>
        <div className="box">
            <h3>Contact Us </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa">
                <a href="tel:+91 9569121326">+91 9569121326 </a></i>  
                <br></br>
                <i className="fa">
                <a href="mailto:vishwajeetkumarpatelmgs@gmail.com">vishwajeetkumarpatelmgs@gmail.com</a></i>
            </div>
        <div className="box">
            <h3>Follow us</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Reach us at</h1>
                 <div className="home__social-icon">
                 <a href="https://twitter.com/the_dead_vibe"><i className="fab fa-twitter"> Twitter</i></a>
                 <a href="https://www.instagram.com/vishwajeet_kumar_patel/"><i className="fab fa-instagram"> Instagram</i></a>
                  <a href="https://www.linkedin.com/in/vishwajeet-kumar-00b817239/"><i className="fab fa-linkedin"> LinkedIn</i></a>
                 <a href="https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3207397,82.9087075,12z/data=!3m1!4b1!4m6!3m5!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144!16zL20vMDFqOTIy?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                <i className="fab fa-google">Google Maps</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    <div className="credits">
        <p>© 2024 Vishwajeet. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
