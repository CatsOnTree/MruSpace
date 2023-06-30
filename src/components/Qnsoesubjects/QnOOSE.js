import React, { useState } from 'react';
import OOSESEMP1 from '../QnImgs/OOSE-SEM-P1-1.png';
import OOSEMID2 from '../QnImgs/OOSE-MID1-P1-1.png';
import "../css/qnpagerightcon.css"
export default function QnOOSE() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const [showImagesMid2, setShowImagesMid2] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  const handleButtonClickMid2 = () => {
    setShowImagesMid2(!showImagesMid2);
  };
  
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        OOSE SEM 
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={OOSESEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        OOSE MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={OOSEMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
