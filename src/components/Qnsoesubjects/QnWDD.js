import React, { useState } from 'react';
import WDDSEMP1 from '../QnImgs/WDD-SEM-P1-1.png';
// import WDDSEMP2 from '../QnImgs/WDD-SEM-P2.jpg';
import WDDMID1 from '../QnImgs/WDD-MID1-P1.jpg';
import WDDMID2 from '../QnImgs/WDD-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnWDD() {
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
        WDD SEM 
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={WDDSEMP1} alt="P&S Question Paper 1" />
          {/* <img className="qnpaperimg" src={WDDSEMP2} alt="P&S Question Paper 2" /> */}
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        WDD MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={WDDMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        WDD MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={WDDMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
