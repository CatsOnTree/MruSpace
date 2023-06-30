import React, { useState } from 'react';
import MLDSSEMP1 from '../QnImgs/MLDS-SEM-P1-1.png';
import MLDSMID2 from '../QnImgs/MLDS-MID2-P1-1.png';
import "../css/qnpagerightcon.css"
export default function QnMLDS() {
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
        MLDS SEM 
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={MLDSSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        MLDS MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={MLDSMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
