import React from "react";
import "../css/materialpg.css";
import downloadbtn from "../images/downloadbtn.png";
import m2mid1 from "../resources/m-2 mid1.pdf";
import m2mid2 from "../resources/m-2 mid2.pdf";
export default function Matbee() {
  return (
    <div>
      <div className="mat-rightcon-1">
      <p className='mat-rc-1-p'>Maths-2</p>
        <div >
          <div className="disflex">
            <p id="matbtndesnam" className="disflex">M2 MID-1 Q&A</p>
            <a href={m2mid1} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">M2 MID-3 Q&A</p>
            <a href={m2mid2} download="">
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
