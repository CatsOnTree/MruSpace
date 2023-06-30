import React from "react";
import "../css/materialpg.css";
import downloadbtn from "../images/downloadbtn.png";
import fimsu12 from "../resources/fimsu12.pptx";
import fimsu3 from "../resources/fimsu3.pptx";
import fimsu4 from "../resources/fimsu4.pptx";
import fimsu5 from "../resources/fimsu5.pptx";
export default function Matbee() {
  return (
    <div>
      <div className="mat-rightcon-1">
      <p className='mat-rc-1-p'>FIMS</p>
        <div >
          <div className="disflex">
            <p id="matbtndesnam" className="disflex">FIMS UNIT-1,2</p>
            <a href={fimsu12} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">FIMS UNIT-3</p>
            <a href={fimsu3} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>{" "}
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">FIMS UNIT-4</p>
            <a href={fimsu4} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>{" "}
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">FIMS UNIT-5</p>
            <a href={fimsu5} download="">
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
