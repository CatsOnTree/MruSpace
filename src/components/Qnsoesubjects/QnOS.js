import React, { useState } from 'react';
import OSSEMP1 from '../QnImgs/OS-SEM-P1.jpg';
import OSMID1P1 from '../QnImgs/OS-MID1-P1-1.png';
import "../css/qnpagerightcon.css"

export default function QnOS() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const [showImagesMid1, setShowImagesMid1] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        OS SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={OSSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}
      <button onClick={handleButtonClickMid1} className="qnbtn-toload">
        OS MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={OSMID1P1} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
