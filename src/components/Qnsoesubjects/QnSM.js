import React, { useState } from 'react';
import SMSEMP1 from '../QnImgs/SM-SEM-P1-1.png';
import "../css/qnpagerightcon.css"
export default function QnSM() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        SM SEM 
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={SMSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

    </div>
  );
}
