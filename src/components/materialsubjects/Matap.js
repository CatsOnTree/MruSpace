import React from "react";
import "../css/materialpg.css";
import downloadbtn from "../images/downloadbtn.png";
import apQA from "../resources/AP QUESTION BANK ANSWERS.pdf";
import apu3n from "../resources/AP unit 3 Answers.pdf";
import apu4n from "../resources/AP unit 4 notes.pdf";
import apu5n from "../resources/AP unit 5 Answers.pdf";

export default function Matbee() {
  return (
    <div>
      <div className="mat-rightcon-1">
      <p className='mat-rc-1-p'>Applied Physics</p>
        <div >
          <div className="disflex">
            <p id="matbtndesnam" className="disflex">AP Q&A (2022)</p>
            <a href={apQA} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">AP U-3 Notes</p>
            <a href={apu3n} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>{" "}
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">AP U-4 Notes</p>
            <a href={apu4n} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>{" "}
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">AP U-5 Notes</p>
            <a href={apu5n} download="">
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
