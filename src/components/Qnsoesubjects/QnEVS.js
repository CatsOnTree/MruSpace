import React, { useState } from 'react';
import EVSSEMP1 from '../QnImgs/EVS-SEM-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnEVS() {
  const [showImagesSem, setShowImagesSem] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        EVS SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={EVSSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
