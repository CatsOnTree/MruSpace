import React, { useState } from "react";
import Btnformat from "./Btnformat";
import "./css/materialpg.css";
import Matpython from "./materialsubjects/Matpython";
import Matbee from "./materialsubjects/Matbee";
import Matdv from "./materialsubjects/Matdv";
import Matwdd from "./materialsubjects/Matwdd";
import Matdbms from "./materialsubjects/Matdbms";
import Matm1 from "./materialsubjects/Matm1";
import Matm2 from "./materialsubjects/Matm2";
import Matfims from "./materialsubjects/Matfims";
import Matap from "./materialsubjects/Matap";
import MatsubjMenu from "./materialsubjects/MatsubjMenu";
import MatOose from "./materialsubjects/MatOose";
import Matai from "./materialsubjects/Matai";
import Matdaa from "./materialsubjects/Matdaa";
export default function Mterialpage() {

  const [matterm, matsetterm] = useState("!");
  const mattermhandle = (e) => {
    var inp = e.target.value;
    matsetterm(inp.toLowerCase());
  };

  const mattitles = [
    { id: "mat1A", title: "Oose!",fun:'ComponentAA'  },
    { id: "mat1", title: "Python!",fun:'ComponentA'  },
    { id: "mat2", title: "BEEE!",fun:'ComponentB'},
    { id: "mat3", title: "Data Visualization!",fun:'ComponentC' },
    { id: "mat4", title: "WDD!",fun:'ComponentD' },
    { id: "mat5", title: "DBMS!",fun:'ComponentE' },
    { id: "mat6", title: "FIMS!",fun:'ComponentF' },
    { id: "mat7", title: "M1!",fun:'ComponentG' },
    { id: "mat8", title: "M2!",fun:'ComponentH' },
    { id: "mat9", title: "AP!",fun:'ComponentI' },
    { id: "mat10", title: "AI!",fun:'ComponentJ' },
    { id: "mat11", title: "DAA!",fun:'ComponentK' },
  ];

  let matfilterList = mattitles.filter((item) => {
    return item.title.toLowerCase().includes(matterm);
  });

  const [matactiveComponent, matsetActiveComponent] = useState(null);

  const mathandleButtonClick = (componentName) => {
    matsetActiveComponent(componentName);
  };


  const [matmobisearchopen,matsetmobiactive]=useState(true)
  const promenumat=()=>{
    matsetmobiactive(wasOpened => !wasOpened)
  }
  const promenumatbtn=(elee)=>{
    matsetmobiactive(elee)
  }

  const matcomponents = {
    ComponentAA: <MatOose/>,
    ComponentA: <Matpython/>,
    ComponentB: <Matbee/>,
    ComponentC: <Matdv/>,
    ComponentD: <Matwdd/>,
    ComponentE: <Matdbms/>,
    ComponentF: <Matfims/>,
    ComponentG: <Matm1/>,
    ComponentH: <Matm2/>,
    ComponentI: <Matap/>,
    ComponentJ: <Matai/>,
    ComponentK: <Matdaa/>,
  };




  return (
   <>
   <div>
   <div className="nav-escape-box-pmobi"></div>
    <div className="nav-escape-box-Pmoni"></div>
   <div className="matmobimaincon">
        <button onClick={promenumat} id="matprgmmenubtn">Subjects Menu</button>
          {matmobisearchopen && (<MatsubjMenu promenumatbtn={promenumatbtn} matfilterList={matfilterList} mathandleButtonClick={mathandleButtonClick}/>)}
        </div>

      <div className="mat-container">
        <div className="mat-leftcon">
          <div className="mat-leftcon-1">
            <p id="mat_programs_sidebar_h">Material</p>
            <input
              type="text"
              id="mat-input"
              placeholder="Search Program"
              value={matterm}
              onChange={mattermhandle}
              onFocus={()=>matsetterm("")}
            />
          </div>
          <div className="mat-leftcon-2">
            <Btnformat mattitles={matfilterList} mathandleButtonClick={mathandleButtonClick}/>
          </div>
        </div>
        <div className="mat-rightcon">
          {matactiveComponent && matcomponents[matactiveComponent]}
        </div>
      </div>
    </div>

   </>
  )
}
