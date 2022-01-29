import React from "react";
import "./css/Service.css";
import weather from "./img/radar.png"
import plane from "./img/plane.png"
import setting from "./img/setting.png"
import mic from "./img/mic.jpg"

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <p>Category</p>
        <h1 className="heading">We Offer Best Service</h1>
        
        
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                
                   <img src={weather} width="250px" height="250px" />
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">Weather</h1>
                <p className="p service__text ">
                Built wicket longer
                </p>
                <p className="p service__text ">
                  admire do baerdon
                </p>
                <p className="p service__text">vanity itself to do it.</p>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                
                   <img src={plane} width="250px" height="250px" />
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">Best flight</h1>
                <p className="p service__text ">
                Built wicket longer
                </p>
                <p className="p service__text ">
                  admire do baerdon
                </p>
                <p className="p service__text">vanity itself to do it.</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                
                   <img src={mic} width="250px" height="250px" />
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">Local Events</h1>
                <p className="p service__text ">
                Built wicket longer
                </p>
                <p className="p service__text ">
                  admire do baerdon
                </p>
                <p className="p service__text">vanity itself to do it.</p>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                
                   <img src={setting} width="250px" height="250px" />
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">Customization </h1>
                <p className="p service__text ">
                Built wicket longer
                </p>
                <p className="p service__text ">
                  admire do baerdon
                </p>
                <p className="p service__text">vanity itself to do it.</p>
              </div>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
}

export default Service;
