import React from "react";
import Btnforpp from "../Btnforpp";
import "../css/ppprgm.css";
export default function PpPrgmMobiMenu({pphandleButtonClick,ppfilterList,promenuppbtn}) {
  return (
    <>
          <div className="pp-mobicon-2">
            <Btnforpp
              pptitles={ppfilterList}
              pphandleButtonClick={pphandleButtonClick}
              promenuppbtn={promenuppbtn}
            />
          </div>
    </>
  )
}
