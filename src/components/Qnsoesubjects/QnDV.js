import React, { useState } from 'react';
import DVSEMP1 from '../QnImgs/DV-SEM-P1.jpg';
import DVMID1 from '../QnImgs/DV-MID1-P1.jpg';
import DVMID2 from '../QnImgs/DV-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnDV() {
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
        DV SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={DVSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        DV MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={DVMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        DV MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={DVMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
