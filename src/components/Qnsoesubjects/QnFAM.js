import React, { useState } from 'react';
import FAMSEMP1 from '../QnImgs/FAM-SEM-P1.jpg';
import FAMMID1 from '../QnImgs/FAM-MID1-P1.jpg';
import FAMMID2 from '../QnImgs/FAM-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnFAM() {
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
        FAM SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={FAMSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        FAM MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={FAMMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        FAM MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={FAMMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
