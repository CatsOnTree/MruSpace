import React, { useState } from 'react';
import BEEESEMP1 from '../QnImgs/BEEE-SEM-P1.jpg';
import BEEEMID1 from '../QnImgs/BEEE-MID1-P1.jpg';
import BEEEMID2 from '../QnImgs/BEEE-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnBEEE() {
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
        BEEE SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={BEEESEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        BEEE MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={BEEEMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        BEEE MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={BEEEMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
