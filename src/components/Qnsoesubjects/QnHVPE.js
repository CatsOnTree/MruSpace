import React, { useState } from 'react';
import HVPESEMP1 from '../QnImgs/HVPE-SEM-P1.jpg';
import HVPEMID1 from '../QnImgs/HVPE-MID1-P1.jpg';
// import HVPEMID2 from '../QnImgs/HVPE-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnHVPE() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const [showImagesMid1, setShowImagesMid1] = useState(false);
//   const [showImagesMid2, setShowImagesMid2] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };
//   const handleButtonClickMid2 = () => {
//     setShowImagesMid2(!showImagesMid2);
//   };
  
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        HVPE SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={HVPESEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        HVPE MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={HVPEMID1} alt="P&S Question Paper 1" />
        </div>
      )}

{/* <button onClick={handleButtonClickMid2} className="qnbtn-toload">
        HVPE MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={HVPEMID2} alt="P&S Question Paper 1" />
        </div>
      )} */}
    </div>
  );
}
