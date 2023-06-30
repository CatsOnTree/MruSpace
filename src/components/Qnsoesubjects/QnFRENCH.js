import React, { useState } from 'react';
import FRENCHSEMP1 from '../QnImgs/FRENCH-SEM-P1.jpg';
import FRENCHSEMP2 from '../QnImgs/FRENCH-SEM-P2.jpg';
import FRENCHSEMP3 from '../QnImgs/FRENCH-SEM-P3.jpg';
import FRENCHSEMP4 from '../QnImgs/FRENCH-SEM-P4.jpg';
import FRENCHSEMP5 from '../QnImgs/FRENCH-SEM-P5.jpg';
import "../css/qnpagerightcon.css"

export default function QnFRENCH() {
  const [showImagesSem, setShowImagesSem] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };

  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        FRENCH SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={FRENCHSEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={FRENCHSEMP2} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={FRENCHSEMP3} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={FRENCHSEMP4} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={FRENCHSEMP5} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
