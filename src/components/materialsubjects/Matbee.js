import React from "react";
import "../css/materialpg.css";
import downloadbtn from "../images/downloadbtn.png";
import beeeQA from "../resources/BEEE Q&A.pdf";
import beeePPT from "../resources/BeeePPT.pdf";
export default function Matbee() {
  return (
    <div>
      <div className="mat-rightcon-1">
      <p className='mat-rc-1-p'>BEEE</p>
        <div >
          <div className="disflex">
            <p id="matbtndesnam" className="disflex">BEEE Q&A (2022)</p>
            <a href={beeeQA} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">BEEE PPT (2022)</p>
            <a href={beeePPT} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
