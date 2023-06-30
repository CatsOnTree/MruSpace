import React from "react";
import Btnfordsp from "../Btnfordsp";
import "../css/dspprgm.css";
export default function DspPrgmMobiMenu({dsphandleButtonClick,dspfilterList,promenudspbtn}) {
  return (
    <>
          <div className="dsp-mobicon-2">
            <Btnfordsp
              titles={dspfilterList}
              handleButtonClick={dsphandleButtonClick}
              promenudspbtn={promenudspbtn}
            />
          </div>
    </>
  )
}
