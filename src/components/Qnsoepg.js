import React, { useState } from "react";
import BtnforQnpg from "./BtnforQnpg";
import "./css/Qnpaperpg.css";
import QnPS from "./Qnsoesubjects/QnPS";
import QnM1 from "./Qnsoesubjects/QnM1";
import QnsubjMenu from "./Qnsoesubjects/QnsubjMenu";
import QnM2 from "./Qnsoesubjects/QnM2";
import QnDM from "./Qnsoesubjects/QnDM";
import QnOS from "./Qnsoesubjects/QnOS";
import QnAP from "./Qnsoesubjects/QnAP";
import QnBEEE from "./Qnsoesubjects/QnBEEE";
import QnDSP from "./Qnsoesubjects/QnDSP";
import QnWDD from "./Qnsoesubjects/QnWDD";
import QnDV from "./Qnsoesubjects/QnDV";
import QnPP from "./Qnsoesubjects/QnPP";
import QnENG from "./Qnsoesubjects/QnENG";
import QnFIMS from "./Qnsoesubjects/QnFIMS";
import QnFAM from "./Qnsoesubjects/QnFAM";
import QnCAEG from "./Qnsoesubjects/QnCAEG";
import QnFRENCH from "./Qnsoesubjects/QnFRENCH";
import QnEVS from "./Qnsoesubjects/QnEVS";
import QnHVPE from "./Qnsoesubjects/QnHVPE";
import QnDBMS from "./Qnsoesubjects/QnDBMS";
import QnOOSE from "./Qnsoesubjects/QnOOSE";
import QnMLDS from "./Qnsoesubjects/QnMLDS";
import QnCCS from "./Qnsoesubjects/QnCCS";
import QnSM from "./Qnsoesubjects/QnSM";
import QnCN from "./Qnsoesubjects/QnCN";
import QnDAA from "./Qnsoesubjects/QnDAA";
import QnJAVA from "./Qnsoesubjects/QnJAVA";
import QnAI from "./Qnsoesubjects/QnAI";

export default function Qnsoepg() {

  const [Qnterm, Qnsetterm] = useState("!");
  const Qntermhandle = (e) => {
    var inp = e.target.value;
    Qnsetterm(inp.toLowerCase());
  };

  const Qntitles = [
    { id: "Qn1", title: "P & S!",fun:'ComponentA'  },
    { id: "Qn2", title: "M1!",fun:'ComponentB'},
    { id: "Qn3", title: "M2!",fun:'ComponentC' },
    { id: "Qn4", title: "DM!",fun:'ComponentD' },
    { id: "Qn5", title: "OS!",fun:'ComponentE' },
    { id: "Qn6", title: "AP!",fun:'ComponentF' },
    { id: "Qn7", title: "BEEE!",fun:'ComponentG' },
    { id: "Qn8", title: "DSP!",fun:'ComponentH' },
    { id: "Qn9", title: "WDD!",fun:'ComponentI' },
    { id: "Qn10", title: "DV!",fun:'ComponentJ' },
    { id: "Qn11", title: "PP!",fun:'ComponentK' },
    { id: "Qn12", title: "ENGLISH!",fun:'ComponentL' },
    { id: "Qn13", title: "FIMS!",fun:'ComponentM' },
    { id: "Qn14", title: "FAM!",fun:'ComponentN' },
    { id: "Qn15", title: "CAEG!",fun:'ComponentO' },
    { id: "Qn16", title: "FRENCH!",fun:'ComponentP' },
    { id: "Qn17", title: "EVS!",fun:'ComponentQ' },
    { id: "Qn18", title: "HVPE!",fun:'ComponentR' },
    { id: "Qn19", title: "DBMS!",fun:'ComponentS' },
    { id: "Qn20", title: "OOSE!",fun:'ComponentT' },
    { id: "Qn21", title: "MLDS!",fun:'ComponentU' },
    { id: "Qn22", title: "CCS!",fun:'ComponentV' },
    { id: "Qn23", title: "SM!",fun:'ComponentW' },
    { id: "Qn24", title: "CN!",fun:'ComponentX' },
    { id: "Qn25", title: "DAA!",fun:'ComponentY' },
    { id: "Qn26", title: "JAVA!",fun:'ComponentZ' },
    { id: "Qn27", title: "AI!",fun:'ComponentAA' },
    // { id: "Qn28", title: "WDD!",fun:'ComponentAB' },
    // { id: "Qn29", title: "WDD!",fun:'ComponentAC' },
    // { id: "Qn30", title: "WDD!",fun:'ComponentAD' },
    // { id: "Qn31", title: "WDD!",fun:'ComponentAE' },
    // { id: "Qn32", title: "WDD!",fun:'ComponentAF' },
    // { id: "Qn33", title: "WDD!",fun:'ComponentAG' },
    // { id: "Qn34", title: "WDD!",fun:'ComponentAH' },
  ];

  let QnfilterList = Qntitles.filter((item) => {
    return item.title.toLowerCase().includes(Qnterm);
  });

  const [QnactiveComponent, QnsetActiveComponent] = useState(null);

  const QnhandleButtonClick = (componentName) => {
    QnsetActiveComponent(componentName);
  };


  const [Qnmobisearchopen,Qnsetmobiactive]=useState(true)
  const promenuQn=()=>{
    Qnsetmobiactive(wasOpened => !wasOpened)
  }
  const promenuQnbtn=(elee)=>{
    Qnsetmobiactive(elee)
  }


  const Qncomponents = {
    ComponentA: <QnPS/>,
    ComponentB: <QnM1/>,
    ComponentC: <QnM2/>,
    ComponentD: <QnDM/>,
    ComponentE: <QnOS/>,
    ComponentF: <QnAP/>,
    ComponentG: <QnBEEE/>,
    ComponentH: <QnDSP/>,
    ComponentI: <QnWDD/>,
    ComponentJ: <QnDV/>,
    ComponentK: <QnPP/>,
    ComponentL: <QnENG/>,
    ComponentM: <QnFIMS/>,
    ComponentN: <QnFAM/>,
    ComponentO: <QnCAEG/>,
    ComponentP: <QnFRENCH/>,
    ComponentQ: <QnEVS/>,
    ComponentR: <QnHVPE/>,
    ComponentS: <QnDBMS/>,
    ComponentT: <QnOOSE/>,
    ComponentU: <QnMLDS/>,
    ComponentV: <QnCCS/>,
    ComponentW: <QnSM/>,
    ComponentX: <QnCN/>,
    ComponentY: <QnDAA/>,
    ComponentZ: <QnJAVA/>,
    ComponentAA: <QnAI/>,
  //   ComponentAB: <Qnap/>,
  //   ComponentAC: <Qnap/>,
  //   ComponentAD: <Qnap/>,
  //   ComponentAE: <Qnap/>,
  //   ComponentAF: <Qnap/>,
  //   ComponentAG: <Qnap/>,
  //   ComponentAH: <Qnap/>,
  };




  return (
   <>
   <div>
   <div className="nav-escape-box-pmobi"></div>
    <div className="nav-escape-box-Pmoni"></div>
   <div className="Qnmobimaincon">
        <button onClick={promenuQn} id="Qnprgmmenubtn">Subjects Menu</button>
          {Qnmobisearchopen && (<QnsubjMenu promenuQnbtn={promenuQnbtn} QnfilterList={QnfilterList} QnhandleButtonClick={QnhandleButtonClick}/>)}
        </div>

      <div className="Qn-container">
        <div className="Qn-leftcon">
          <div className="Qn-leftcon-1">
            <p id="Qn_programs_sidebar_h">Qn Papers</p>
            <input
              type="text"
              id="Qn-input"
              placeholder="Search Program"
              value={Qnterm}
              onChange={Qntermhandle}
              onFocus={()=>Qnsetterm("")}
            />
          </div>
          <div className="Qn-leftcon-2">
            <BtnforQnpg Qntitles={QnfilterList} QnhandleButtonClick={QnhandleButtonClick}/>
          </div>
        </div>
        <div className="Qn-rightcon">
          {QnactiveComponent && Qncomponents[QnactiveComponent]}
        </div>
      </div>
    </div>

   </>
  )
}
