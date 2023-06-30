import React, { useState } from 'react';
import DBMSSEMP1 from '../QnImgs/DBMS-SEM-P1.jpg';
import DBMSSEMP2 from '../QnImgs/DBMS-SEM-P2.jpg';
import DBMSMID1 from '../QnImgs/DBMS-MID1-P1.jpg';
import DBMSMID2 from '../QnImgs/DBMS-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnDBMS() {
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
        DBMS SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={DBMSSEMP1} alt="P&S Question Paper 1" />
          <img className="qnpaperimg" src={DBMSSEMP2} alt="P&S Question Paper 2" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        DBMS MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={DBMSMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        DBMS MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={DBMSMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
