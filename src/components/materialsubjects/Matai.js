import React from "react";
import "../css/materialpg.css";
import downloadbtn from "../images/downloadbtn.png";
import AiNote from "../resources/AI-DigitalNotes.pdf";
import AiSemAns from "../resources/AI_SEM_ANS.pdf";
export default function Matai() {
  return (
    <div>
      <div className="mat-rightcon-1">
      <p className='mat-rc-1-p'>Artifical Intelligence</p>
        <div >
          <div className="disflex">
            <p id="matbtndesnam" className="disflex">Ai Digital Notes</p>
            <a href={AiNote} download="">
              <button className="downloadbtn">
                <img className="downloadimg" src={downloadbtn} alt="DOWNLOAD" />
              </button>
            </a>
          </div>
          <div className="disflex" style={{marginTop:"10px"}}>
            <p id="matbtndesnam" className="disflex">AI SEM Q&A </p>
            <a href={AiSemAns} download="">
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
