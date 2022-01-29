
import React from "react";
import './css/FooterStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import playstore from "./img/playlast.png"


function Footer() {
  return (
    <div className="Box">
      
      <div className="Container">
        
        <div className="Row">
        <div className="Column logo">
        
        <h1 className="footer_lead">Jadoo.</h1>
        <p>
          Back your trip in  minute get full controlfor much longer. 
        </p>
          </div>
          <div className="Column">
            <div className="Heading"> Company</div>
            <div className="FooterLink" href="#">About</div>
            <div className="FooterLink" href="#">careers</div>
            <div className="FooterLink" href="#">Mobile</div>
          </div>
          <div className="Column">
            <div className=" Heading">Contact</div>
            <div className="FooterLink" href="#">Help/FAQ</div>
            <div className="FooterLink" href="#">Afflatess</div>
          
          </div>
          <div className="Column">
            <div className="Heading">More</div>
            <div className="FooterLink" href="#">Aim</div>
            <div className="FooterLink" href="#">Vision</div>
            <div className="FooterLink" href="#">Testimonials</div>
          </div>
          <div className="Column ">
            <div className="socialmedia">
              <span className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
           
              <span className="insta"><FontAwesomeIcon icon={  faInstagram} size="2x" /></span>
           


              <span className="fb"><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
            </div>
            <div className="Heading">Discover our app</div>

          
            <div className="FooterLink" href="#">
              <i className="image_playstore">
                <span style={{ marginLeft: "10px" }}>
                <img src={playstore} width="200px" />
                </span>
              </i>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
