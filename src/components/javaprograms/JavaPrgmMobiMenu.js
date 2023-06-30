import React from "react";
import Btnforjava from "../Btnforjava";
import "../css/javaprgm.css";
export default function JavaPrgmMobiMenu({javahandleButtonClick,javafilterList,promenujavabtn}) {
  return (
    <>
          <div className="java-mobicon-2">
            <Btnforjava
              javatitles={javafilterList}
              javahandleButtonClick={javahandleButtonClick}
              promenujavabtn={promenujavabtn}
            />
          </div>
    </>
  )
}
