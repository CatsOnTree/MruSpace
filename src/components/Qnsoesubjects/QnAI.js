import React, { useState } from 'react';
import AIMID1P1 from '../QnImgs/AI-MID1-P1-1.png';
import "../css/qnpagerightcon.css"

export default function QnAI() {
  const [showImagesMid1, setShowImagesMid1] = useState(false);

  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickMid1} className="qnbtn-toload">
        AI MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={AIMID1P1} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
