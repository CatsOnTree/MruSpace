import React, { useState } from 'react';
import PPSEMP1 from '../QnImgs/PP-SEM-P1.jpg';
import PPMID1 from '../QnImgs/PP-MID1-P1.jpg';
import PPMID2 from '../QnImgs/PP-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnPP() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const [showImagesMid1, setShowImagesMid1] = useState(false);
  const [showImagesMid2, setShowImagesMid2] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };
  const handleButtonClickMid2 = () => {
    setShowImagesMid2(!showImagesMid2);
  };
  
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        PP SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={PPSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        PP MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={PPMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        PP MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={PPMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
