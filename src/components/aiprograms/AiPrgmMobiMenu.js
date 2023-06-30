import React from "react";
import Btnforai from "../Btnforai";
import "../css/aiprgm.css";
export default function AiPrgmMobiMenu({aihandleButtonClick,aifilterList,promenuaibtn}) {
  return (
    <>
          <div className="ai-mobicon-2">
            <Btnforai
              aititles={aifilterList}
              aihandleButtonClick={aihandleButtonClick}
              promenuaibtn={promenuaibtn}
            />
          </div>
    </>
  )
}
