import React from "react";
import "./css/Home.css";
import planet1 from "./img/planet1.png";
// import newstars2 from './img/newstars2.png'
import newgas from "./img/newgas.png";
import newgas2 from "./img/newgas2.png";
// import mlogo from "./img/m-logo.png";
import panel from "./img/panel.png";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import manfloting from "./img/manfloting.png";
import head from "./img/head.png";
import rthand from "./img/rthand.png";
import ltleg from "./img/ltleg.png";
import rglrg from "./img/rglrg.png";
import './css/toolsdropdown.css'
import ToolDropDown from "./ToolDropDown";
import ReactGA from 'react-ga4';
export default function Home() {
  const togglemenu = ()=>{
    document.getElementById("sidebar").classList.toggle("active");

    ReactGA.event({
      action:"explore_btn clicked",
      category:"exploreBtn",
      label:"exploreBtn_label",
      value: "xxxx",
    })
   }

  return (
    <>
    <div className="MainCon">
      <ToolDropDown togglemenu={togglemenu}/>
      <div className="Hcontainer">
        <img src={planet1} alt="planet" className="planet-img"/>
        <img src={newgas} alt="newgas1" className="newgas1"/>
        <img src={newgas2} alt="newgas2" className="newgas2"/>
        <div className="Hleftcon">
          <div className="Hleftcon-1">
            <h1>The Mru-</h1>
            <h1>Space platform</h1>
            <h1>is for MRU students</h1>
            <p>Find some of our useful tools</p>
            <p>to excel in your examination..</p>
            <button className="explore-btn" onClick={()=>togglemenu()}>Explore</button>
          </div>
        </div>
        <div className="Hrightcon">
          <div className="Hrightcon-bundle">
            <img src={panel} alt="panel" className="panel"/>
            <img src={img1} alt="img1" className="cmimg img1" />
            <img src={img2} alt="img2" className="cmimg img2" />
            <img src={img3} alt="img3" className="cmimg img3" />
            <img src={img4} alt="img4" className="cmimg img4" />
            <img src={img5} alt="img5" className="cmimg img5" />
            <img src={img6} alt="img6" className="cmimg img6" />
            <img src={img7} alt="img7" className="cmimg img7" />
            <div className="manbundle">
            <img src={manfloting} alt="man" className="man-img"/>
                <img src={head} alt="head" className="man-head"/>
                <img src={rthand} alt="hand" className="right-hand"/>
                <img src={ltleg} alt="leg" className="left-leg"/>
                <img src={rglrg} alt="leg" className="right-leg"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
  }

