import React, { useState } from 'react';
import M1SEMP1 from '../QnImgs/M1-SEM-P1.jpg';
import M1SEMP2 from '../QnImgs/M1-SEM-P2.jpg';
import M1MID1 from '../QnImgs/M1-MID1-P1.jpg';
import M1MID2 from '../QnImgs/M1-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnM1() {
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
        M-1 SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={M1SEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={M1SEMP2} alt="P&S Question Paper 2" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        M-1 MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={M1MID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        M-1 MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={M1MID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
