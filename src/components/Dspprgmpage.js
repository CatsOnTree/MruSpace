import React, { useState } from "react";
import Btnfordsp from "./Btnfordsp";
import "./css/dspprgm.css";
import DspPrgmMobiMenu from "./dspprograms/DspPrgmMobiMenu";
import DspContent from "./dspprograms/DspContent";


export default function Dspprgmpage() {
  const [term, setterm] = useState("!");
  const termhandle = (e) => {
    var inp = e.target.value;
    setterm(inp.toLowerCase());
  };



  const titles = [
    { id: "dsp1", title: "Stack!",fun:'ComponentA'  },
    { id: "dsp2", title: "Queue!",fun:'ComponentB'},
    { id: "dsp3", title: "Linear Search!",fun:'ComponentC' },
    { id: "dsp4", title: "Binary Search!",fun:'ComponentD' },
    { id: "dsp5", title: "Insertion in SLL!",fun:'ComponentE' },
    { id: "dsp6", title: "Deletion in SLL!",fun:'ComponentF' },
    { id: "dsp7", title: "Insertion in DLL!",fun:'ComponentG' },
    { id: "dsp8", title: "Deletion in DLL!",fun:'ComponentH' },
    { id: "dsp9", title: "Abstraction!",fun:'ComponentI' },
    { id: "dsp10", title: "Word Count!",fun:'ComponentJ' },
    { id: "dsp11", title: "Bubble Sort!",fun:'ComponentK' },
    { id: "dsp12", title: "Merge Sort!" ,fun:'ComponentL'},
    { id: "dsp13", title: "Selection Sort!" ,fun:'ComponentM'},
    { id: "dsp14", title: "Tree Order!" ,fun:'ComponentN'},
    { id: "dsp15", title: "Sort Student using Bubble Sort!",fun:'ComponentO' },
    { id: "dsp16", title: "Palindrome!",fun:'ComponentP' },
    { id: "dsp17", title: "Depth First Search!",fun:'ComponentQ' },
    { id: "dsp18", title: "Width First Search!",fun:'ComponentR' },
  ];
  let filterList = titles.filter((item) => {
    return item.title.toLowerCase().includes(term);
  });

  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

   const [dspmobisearchopen,dspsetmobiactive]=useState(true)
  const promenudsp=()=>{
    dspsetmobiactive(wasOpened => !wasOpened)
  }
  const promenudspbtn=(elee)=>{
    dspsetmobiactive(elee)
  }

  const components = {
    ComponentA: <DspContent activeComponent={activeComponent}/>,
    ComponentB: <DspContent activeComponent={activeComponent}/>,
    ComponentC: <DspContent activeComponent={activeComponent}/>,
    ComponentD: <DspContent activeComponent={activeComponent}/>,
    ComponentE: <DspContent activeComponent={activeComponent}/>,
    ComponentF: <DspContent activeComponent={activeComponent}/>,
    ComponentG: <DspContent activeComponent={activeComponent}/>,
    ComponentH: <DspContent activeComponent={activeComponent}/>,
    ComponentI: <DspContent activeComponent={activeComponent}/>,
    ComponentJ: <DspContent activeComponent={activeComponent}/>,
    ComponentK: <DspContent activeComponent={activeComponent}/>,
    ComponentL: <DspContent activeComponent={activeComponent}/>,
    ComponentM: <DspContent activeComponent={activeComponent}/>,
    ComponentN: <DspContent activeComponent={activeComponent}/>,
    ComponentO: <DspContent activeComponent={activeComponent}/>,
    ComponentP: <DspContent activeComponent={activeComponent}/>,
    ComponentQ: <DspContent activeComponent={activeComponent}/>,
    ComponentR: <DspContent activeComponent={activeComponent}/>,
  };

  return (
    <>
    <div>
    <div className="nav-escape-box-pmobi"></div>
    <div className="nav-escape-box-Pmoni"></div>
      <div className="dspmobimaincon">
        <button onClick={promenudsp} id="dspprgmmenubtn">DSP Programs Menu</button>
          {dspmobisearchopen && (<DspPrgmMobiMenu promenudspbtn={promenudspbtn} dspfilterList={filterList} dsphandleButtonClick={handleButtonClick}/>)}
        </div>

      <div className="dsp-container">
        <div className="dsp-leftcon">
          <div className="dsp-leftcon-1">
            <p id="dsp_programs_sidebar_h">Programs</p>
            <input
              type="text"
              id="dsp-input"
              placeholder="Search Program"
              value={term}
              onChange={termhandle}
              onFocus={()=>setterm("")}
            />
          </div>
          <div className="dsp-leftcon-2">
            <Btnfordsp titles={filterList} handleButtonClick={handleButtonClick} />
          </div>
        </div>
        <div className="dsp-rightcon">
          {activeComponent && components[activeComponent]}
        </div>
      </div>
    </div>
    </>
  );
}
