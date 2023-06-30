import React, { useState } from 'react';
import imageSrc from './images/P&S1.jpg';

export default function Qnsoepg() {
  const [imageSource, setImageSource] = useState(null);
  const handleButtonClick = () => {
    setImageSource(imageSrc);

  };
  return (
    <div>
      <button onClick={handleButtonClick}>Load Image</button>
      {imageSource && <img style={{width:"200px",height:"600px"}}src={imageSource} alt="Loaded" />}
    </div>
  );
    
}
