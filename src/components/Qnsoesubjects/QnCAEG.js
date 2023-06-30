import React, { useState } from 'react';
import CAEGSEMP1 from '../QnImgs/CAEG-SEM-P1.jpg';
import CAEGSEMP2 from '../QnImgs/CAEG-SEM-P2.jpg';
import CAEGMID1 from '../QnImgs/CAEG-MID1-P1.jpg';
import CAEGMID2 from '../QnImgs/CAEG-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnCAEG() {
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
        CAEG SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={CAEGSEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={CAEGSEMP2} alt="P&S Question Paper 2" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        CAEG MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={CAEGMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        CAEG MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={CAEGMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  )
      }