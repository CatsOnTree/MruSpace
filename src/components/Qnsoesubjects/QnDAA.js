import React, { useState } from 'react';
import DAAMID1P1 from '../QnImgs/DAA-MID1-P1-1.png';
import "../css/qnpagerightcon.css"

export default function QnDAA() {
  const [showImagesMid1, setShowImagesMid1] = useState(false);

  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickMid1} className="qnbtn-toload">
        DAA MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={DAAMID1P1} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
