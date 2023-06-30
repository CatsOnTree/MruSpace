import React from "react";
import { useNavigate } from "react-router-dom";
import './css/prgmpg.css'
export default function Prgmpg() {
const navigate = useNavigate();
const dsp_pg = () => {
  navigate("/dspprograms")
}
const pp_pg = () => {
  navigate("/ppprograms")
}
const wdd_pg = () => {
  navigate("/wddprograms")
}
const jp_pg = () => {
  navigate("/javaprograms")
}
const aip_pg = () => {
  navigate("/aiprograms")
}


  return (
    <>
      <div className="prgmpg-container">
        <div className="nav-escape-box"></div>
        <div className="nav-escape-box-Pmoni"></div>
        <p>Programming Subject</p>
        <div className="prgmpg-buttonscontainer">
          <button onClick={() => pp_pg()}>Python Programming</button>
          <button onClick={()=> dsp_pg()}>Data Structures Using Python</button>
          <button onClick={() => wdd_pg()}>Web Design And Development</button>
          <button onClick={() => jp_pg()}>Java Programming</button>
          <button onClick={() => aip_pg()}>Ai Programming</button>
        </div>
      </div>
    </>
  );
}
