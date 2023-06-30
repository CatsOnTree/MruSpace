import React, { useState } from 'react';
import APSEMP1 from '../QnImgs/AP-SEM-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnAP() {
  const [showImagesSem, setShowImagesSem] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        AP SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={APSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
