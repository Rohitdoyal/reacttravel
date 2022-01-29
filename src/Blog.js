import React from "react";
import "./css/Blog.css";
import Blog1 from './img/usa.jpg';
import Blog2 from './img/Rectangle2.png';
import Blog3 from './img/Rectangle.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
      <p className="heading p__color">
          Top selling </p>
        <h1 className="heading">Top destination </h1>
        
      
      </div>
      <div className="container">
          <div className="row">
              
              

              

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                                     </div>
                                     <div className="Blog__meta absolute">
                         <h5 className="project__text">Rome, italy</h5>
                         <h4 className="project__text">Price:15k</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">London uk</h5>
                         <h4 className="project__text">Price:$4.2k </h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Rome, italy</h5>
                         <h4 className="project__text">Price:15k</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>


          </div>
      </div>
    </div>
  );
}

export default Blog;
