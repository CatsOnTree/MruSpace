import React from 'react'
import "../css/materialpg.css";
import downloadbtn from '../images/downloadbtn.png';
import OoseQA from '../resources/OOSE.pdf'
export default function MatOose() {
    return (
        <div>
          <div className="mat-rightcon-1">
          <p className='mat-rc-1-p'>OOSE</p>
            <div className='disflex'>
                <p id='matbtndesnam' className='disflex'>Oose Q&A</p>
                <a href={OoseQA} download=""><button className='downloadbtn'><img className='downloadimg' src={downloadbtn} alt="download"/></button></a> 
            </div>
          </div>
        </div>
      );
}
