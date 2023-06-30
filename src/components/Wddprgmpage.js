import React,{useState} from 'react'
import "./css/wddprgm.css";
import Btnforwdd from "./Btnforwdd";
import WddPrgmMobiMenu from './wddprograms/WddPrgmMobiMenu';
import WddContent from './wddprograms/WddContent';
export default function Wddprgmpage() {
    const [wddterm, wddsetterm] = useState("!");
    const wddtermhandle = (e) => {
      var inp = e.target.value;
      wddsetterm(inp.toLowerCase());
    };

    const wddtitles = [
      { id: "pp1", title: "Text Formatting!",fun:'ComponentA'  },
      { id: "pp2", title: "Hyperlinks!",fun:'ComponentB'},
      { id: "pp3", title: "Calculator!",fun:'ComponentC' },
      { id: "pp4", title: "Comparison Operator!",fun:'ComponentD' },
      { id: "pp5", title: "Current Time & Date!",fun:'ComponentE' },
      { id: "pp6", title: "Toggle Menu!",fun:'ComponentF' },
      { id: "pp7", title: "X5 & X6 in table format!",fun:'ComponentG' },
      { id: "pp8", title: "Square & Cubes from 1 to 10!",fun:'ComponentH' },
      { id: "pp9", title: "Variable Declaration!",fun:'ComponentI' },
      { id: "pp10", title: "onClick Event!",fun:'ComponentJ' },
      { id: "pp11", title: "onSubmit Event!",fun:'ComponentK' },
      { id: "pp12", title: "onFocus Event!",fun:'ComponentL' },
      { id: "pp13", title: "onLoad Event!",fun:'ComponentM' },
    ];
  
    let wddfilterList = wddtitles.filter((item) => {
      return item.title.toLowerCase().includes(wddterm);
    });
  
    const [wddactiveComponent, wddsetActiveComponent] = useState(null);
  
    const wddhandleButtonClick = (componentName) => {
      wddsetActiveComponent(componentName);
    };

    const [mobisearchopen,wddsetmobiactive]=useState(true)
    const promenuwdd=()=>{
      wddsetmobiactive(wasOpened => !wasOpened)
    }
    const promenuwddbtn=(elee)=>{
      wddsetmobiactive(elee)
    }

    const wddcomponents = {
    ComponentA: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentB: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentC: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentD: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentE: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentF: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentG: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentH: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentI: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentJ: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentK: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentL: <WddContent wddactiveComponent={wddactiveComponent}/>,
    ComponentM: <WddContent wddactiveComponent={wddactiveComponent}/>,
    };
  
  
    return (
      <>
      <div>
      <div className="nav-escape-box-pmobi"></div>
    <div className="nav-escape-box-Pmoni"></div>
      <div className="wddmobimaincon">
        <button onClick={promenuwdd} id="wddprgmmenubtn">WDD Programs Menu</button>
          {mobisearchopen && (<WddPrgmMobiMenu promenuwddbtn={promenuwddbtn} wddfilterList={wddfilterList} wddhandleButtonClick={wddhandleButtonClick}/>)}
        </div>

        <div className="wdd-container">
          <div className="wdd-leftcon">
            <div className="wdd-leftcon-1">
              <p id="wdd_programs_sidebar_h">Programs</p>
              <input
                type="text"
                id="wdd-input"
                placeholder="Search Program"
                value={wddterm}
                onChange={wddtermhandle}
                onFocus={()=>wddsetterm("")}
              />
            </div>
            <div className="wdd-leftcon-2">
              <Btnforwdd wddtitles={wddfilterList} wddhandleButtonClick={wddhandleButtonClick} />
            </div>
          </div>
          <div className="wdd-rightcon">
            {wddactiveComponent && wddcomponents[wddactiveComponent]}
          </div>
        </div>
      </div>
  
      </>
    )
}
