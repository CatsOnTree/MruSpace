import React from 'react'
import "./css/uploadpg.css"
export default function Uploadpglanding() {

  function Formload(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdEaMzGeSvqBH5kIdeVi6altjL38OLhh846INM9DYlEPepgrA/viewform";
  }
  return (
    <div className='uppg-maincon'>
      <div className="nav-escape-box"></div>
        <div className="nav-escape-box-Pmoni"></div>
        <div className="up-con-1">
          <p><span className='orange-color'>Share</span> your tools and make this </p>
          <p>place a <span className='orange-color'>better</span> one.</p>
        </div>
        <div className="up-con-2">
          <p>Upload any <span className='bold-cls'>Question papers</span> or <span className='bold-cls'>Materials</span> in PDF, DOCX, PPT format.</p>
        </div>
        <div className="up-con-3">
          <button onClick={()=> Formload()}>Upload Now</button>
        </div>
    </div>
  );
};
