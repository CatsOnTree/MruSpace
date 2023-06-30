import React, { useState } from 'react';
import FIMSSEMP1 from '../QnImgs/FIMS-SEM-P1.jpg';
import FIMSMID1 from '../QnImgs/FIMS-MID1-P1.jpg';
import FIMSMID2 from '../QnImgs/FIMS-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnFIMS() {
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
        FIMS SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={FIMSSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        FIMS MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={FIMSMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        FIMS MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={FIMSMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
