import React from "react";
import "./css/contributors.css";
import roundcircle from './images/round_orange.png' 
import astronautshelmet from './images/astronaut-helmet.png' 
export default function Contributorspg() {
  return (
    <>
      <div className="nav-escape-box-pmobi"></div>
      <div className="nav-escape-box-Pmoni"></div>
      <div className="contri-container">

        <div className="astronauts">
          <p>Thanks to all the <span style={{color:"var(--orange"}}>Astronauts</span> for contributing for this space.</p>
        </div>

        <div className="special-thanks">
          <p>Special thanks to</p>
        </div>

        <div className="st-names">
          <p className="flex-box"><img src={roundcircle} alt="circle"/>&nbsp;&nbsp;Aravind Sagar</p>
          <p className="flex-box"><img src={roundcircle} alt="circle"/>&nbsp;&nbsp;Ellendula Aditya</p>
        </div>

        <div className="our-contributors">
            <p>Our Contributors</p>
        </div>

        <div className="contri-names">
          <p className="flex-box"><img src={astronautshelmet} alt="astronaut"></img>&nbsp;&nbsp;Adhnan Sameer</p>
          <p className="flex-box"><img src={astronautshelmet} alt="astronaut"></img>&nbsp;&nbsp;Anil Kumar</p>
        </div>

      </div>
    </>
  );
}
