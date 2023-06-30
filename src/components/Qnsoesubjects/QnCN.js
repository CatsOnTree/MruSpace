import React, { useState } from 'react';
import CNSEMP1 from '../QnImgs/CN-SEM-P1-1.png';
import "../css/qnpagerightcon.css"
export default function QnCN() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        CN SEM 
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={CNSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

    </div>
  );
}
