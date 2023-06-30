import React, { useState } from "react";
import Btnforpp from "./Btnforpp";
import "./css/ppprgm.css";
import PpPrgmMobiMenu from "./ppprograms/PpPrgmMobiMenu";
import PpContent from "./ppprograms/PpContent";

export default function Ppprgmpage() {
  const [ppterm, ppsetterm] = useState("!");
  const pptermhandle = (e) => {
    var inp = e.target.value;
    ppsetterm(inp.toLowerCase());
  };

  const pptitles = [
    { id: "pp1", title: "Sum of 2 Numbers!", fun: "ComponentA" },
    { id: "pp2", title: "Simple Calculator!", fun: "ComponentB" },
    { id: "pp3", title: "Relational Operators!", fun: "ComponentC" },
    { id: "pp4", title: "Logical Operators!", fun: "ComponentD" },
    { id: "pp5", title: "Swapping of Variables!", fun: "ComponentE" },
    { id: "pp6", title: "Simple Interest!", fun: "ComponentF" },
    { id: "pp7", title: "Largest Num In given 3 Nums!", fun: "ComponentG" },
    { id: "pp8", title: "List Program!", fun: "ComponentH" },
    { id: "pp9", title: "Tuple Program!", fun: "ComponentI" },
  ];

  let ppfilterList = pptitles.filter((item) => {
    return item.title.toLowerCase().includes(ppterm);
  });

  const [ppactiveComponent, ppsetActiveComponent] = useState(null);

  const pphandleButtonClick = (componentName) => {
    ppsetActiveComponent(componentName);
  };

  const [mobisearchopen,setmobiactive]=useState(true)
  const promenupp=()=>{
    setmobiactive(wasOpened => !wasOpened)
  }
  const promenuppbtn=(elee)=>{
    setmobiactive(elee)
  }

  const ppcomponents = {
    ComponentA: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentB: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentC: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentD: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentE: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentF: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentG: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentH: <PpContent ppactiveComponent={ppactiveComponent}/>,
    ComponentI: <PpContent ppactiveComponent={ppactiveComponent}/>,
  };

  return (
    <>
      <div>
      <div className="nav-escape-box-pmobi"></div>
      <div className="nav-escape-box-Pmoni"></div>
        <div className="mobimaincon">
        <button onClick={promenupp} id="ppprgmmenubtn">PP Programs Menu</button>
          {mobisearchopen && (<PpPrgmMobiMenu promenuppbtn={promenuppbtn} ppfilterList={ppfilterList} pphandleButtonClick={pphandleButtonClick}/>)}
        </div>

        <div className="pp-container">
          <div className="pp-leftcon">
            <div className="pp-leftcon-1">
              <p id="pp_programs_sidebar_h">Programs</p>
              <input
                type="text"
                id="pp-input"
                placeholder="Search Program"
                value={ppterm}
                onChange={pptermhandle}
                onFocus={() => ppsetterm("")}
              />
            </div>
            <div className="pp-leftcon-2">
              <Btnforpp
                pptitles={ppfilterList}
                pphandleButtonClick={pphandleButtonClick}
              />
            </div>
          </div>
          <div className="pp-rightcon">
            {ppactiveComponent && ppcomponents[ppactiveComponent]}
          </div>
        </div>
      </div>
    </>
  );
}
