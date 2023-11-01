import React from 'react'
import Karachi from "../../images/karachi.jpg"
import Lahore from "../../images/lahore.jpg"
import Islamabad from "../../images/islamabad.jpg"

import "./feature.css";

const Featured = () => {
  return (
    

    <div className="featured">
      <div className="featuredItem">
        <img
          src={Karachi}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
        <h1>Karachi</h1>
        <h2>500 restaurants</h2>
        </div>
      </div>
      
      <div className="featuredItem">
      <img src={Islamabad} 
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
        <h1>Islamabad</h1>
        <h2>50 restaurants</h2>
        </div>
      </div>
      <div className="featuredItem">
      <img src={Lahore}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
        <h1>Lahore</h1>
        <h2>20 restaurants</h2>
        </div>
      </div>
    </div>
   
  );
};

export default Featured;
