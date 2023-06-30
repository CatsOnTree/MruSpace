import React from "react";
import Btnformat from "../Btnformat";
import "../css/materialpg.css";
export default function MatsubjMenu({mathandleButtonClick,matfilterList,promenumatbtn}) {
  return (
    <>
          <div className="mat-mobicon-2">
            <Btnformat
              mattitles={matfilterList}
              mathandleButtonClick={mathandleButtonClick}
              promenumatbtn={promenumatbtn}
            />
          </div>
    </>
  )
}
