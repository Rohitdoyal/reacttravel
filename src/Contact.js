import React from 'react';
import './css/Contact.css';


function Contact() {
    return (
        <div className="contact component__space" id="Contact">
             <div className="contact__box">
                        <div className="contact__meta">

                            <h1 className="hire__text">Subscribe to get information, latest news and other interesting offers about Cobham</h1>
                        </div>
                        <div className="input__box">

                            <input type="text" className="contact email" placeholder=" Your Email *" />
                            

                            <button className="btn contact pointer" type="submit">Subscribe</button>
                        </div>
                  

            </div>
        </div>
    )
}

export default Contact
