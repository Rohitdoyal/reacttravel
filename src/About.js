import React from "react";
import "./css/About.css";
import natphot from "./img/Rectangle1.jpg";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          
          <div className="col__2">
            <h1 className="about__heading">Book Your Next trip in 3 step</h1>
            <div className="about__meta">

            <div className="pointss">
              <div className="pointheader">
                <FmdGoodIcon/>
                
              </div>
              <div className="containpoints">
              <b>Choose destination </b>
              <p className="about__text p__color">
              
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              </div>
              </div>
              
              <div className="pointss">
              <div className="pointheader">
              <PaymentIcon/>
                
              </div>
              <div className="containpoints">
              <b>Make payment</b>
              <p className="about__text p__color">
              
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              </div>
              </div>

              <div className="pointss">
              <div className="pointheader">
              <LocalAirportIcon/>
                
              </div>
              <div className="containpoints">
              <b> Reach airport on selected date </b>
               
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>
              </div>
              </div>
              
            </div>
          </div>
          <div className="col__2">
            

            <div className="service__box pointer">
              <div className="icon">
                
                   <img src={natphot}  height="250px" />
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">Trip to greece</h1>
                <p className="p service__text backdark">
                14-25 june | by robbin
                </p>
                <p className="p service__text ">
                  icons
                </p>
                <p className="p service__text">24 people going <FavoriteBorderIcon /> </p>
              </div>
            </div>


          
          </div>
        </div>
      </div>

      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
