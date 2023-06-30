import React, { useState } from 'react';
import CCSSEMP1 from '../QnImgs/CCS-SEM-P1-1.png';
import "../css/qnpagerightcon.css"
export default function QnCCS() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        CCS SEM 
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={CCSSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

    </div>
  );
}
