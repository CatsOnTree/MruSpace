import React, { useState } from 'react';
import DMSEMP1 from '../QnImgs/DM-SEM-P1.jpg';
import DMSEMP2 from '../QnImgs/DM-SEM-P2.jpg';
import DMMID1P1 from '../QnImgs/DM-MID1-P1-1.png';
import "../css/qnpagerightcon.css"

export default function QnDM() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const [showImagesMid1, setShowImagesMid1] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        DM SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={DMSEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={DMSEMP2} alt="P&S Question Paper 2" />
        </div>
      )}

       <button onClick={handleButtonClickMid1} className="qnbtn-toload">
        DM MID-1
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={DMMID1P1} alt="DM Question Paper 1" />
        </div>
      )}

    </div>
  );
}
