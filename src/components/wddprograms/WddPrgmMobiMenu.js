import React from "react";
import Btnforwdd from '../Btnforwdd'
import "../css/wddprgm.css";
export default function WddPrgmMobiMenu({wddhandleButtonClick,wddfilterList,promenuwddbtn}) {
  return (
    <>
          <div className="wdd-mobicon-2">
            <Btnforwdd
              wddtitles={wddfilterList}
              wddhandleButtonClick={wddhandleButtonClick}
              promenuwddbtn={promenuwddbtn}
            />
          </div>
    </>
  )
}
