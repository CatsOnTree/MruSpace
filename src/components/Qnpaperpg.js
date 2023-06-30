import React from "react";
import { useNavigate } from "react-router-dom";
import './css/Qncoursepage.css'
export default function Qnpaperpg() {
const navigate = useNavigate();
const soe_pg = () => {
  navigate("/soe")
}
const soas_bpt_pg = () => {
  navigate("/soasBPT")
}

  return (
    <>
    <div className="nav-escape-box"></div>
        <div className="nav-escape-box-Pmoni"></div>
      <div className="Qnpaperpg-container">
        <p>&nbsp;&nbsp;Previous Year <br/>
        Question Papers</p>
        <div className="Qnpaperpg-buttonscontainer">
          <button onClick={() => soe_pg()}>School Of Engineering</button>
          <button onClick={()=> soas_bpt_pg()}>Allied Sciences-BPT</button>
        </div>
      </div>
    </>
  );
}
