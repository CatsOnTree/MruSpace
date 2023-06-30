import React, { useState } from 'react';
import PSSEMP1 from '../QnImgs/PS-SEM-P1.jpg';
import PSSEMP2 from '../QnImgs/PS-SEM-P2.jpg';
import PSMID1 from '../QnImgs/PS-MID1-P1.png';
import PSMID2 from '../QnImgs/PS-MID2-P1.png';
import "../css/qnpagerightcon.css"

export default function QnPS() {
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
        P&S SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={PSSEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={PSSEMP2} alt="P&S Question Paper 2" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        P&S MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={PSMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        P&S MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={PSMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
