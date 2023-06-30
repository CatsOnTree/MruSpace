import React from "react";
import BtnforQnpg from "../BtnforQnpg";
import "../css/Qnpaperpg.css";
export default function QnsubjMenu({QnhandleButtonClick,QnfilterList,promenuQnbtn}) {
  return (
    <>
          <div className="Qn-mobicon-2">
            <BtnforQnpg
              Qntitles={QnfilterList}
              QnhandleButtonClick={QnhandleButtonClick}
              promenuQnbtn={promenuQnbtn}
            />
          </div>
    </>
  )
}
