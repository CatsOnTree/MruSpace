import React, { useState } from 'react';
import ENGSEMP1 from '../QnImgs/ENG-SEM-P1.jpg';
import ENGSEMP2 from '../QnImgs/ENG-SEM-P2.jpg';
import ENGMID1 from '../QnImgs/ENG-MID1-P1.jpg';
import ENGMID2 from '../QnImgs/ENG-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnENG() {
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
        ENG SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={ENGSEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={ENGSEMP2} alt="P&S Question Paper 2" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        ENG MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={ENGMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        ENG MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={ENGMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
