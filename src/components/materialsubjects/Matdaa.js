import React from 'react'
import "../css/materialpg.css";
import downloadbtn from '../images/downloadbtn.png';
import daaQA from '../resources/DAA_SEM_ANS.pdf'
export default function Matdaa() {
    return (
        <div>
          <div className="mat-rightcon-1">
          <p className='mat-rc-1-p'>DAA</p>
            <div className='disflex'>
                <p id='matbtndesnam' className='disflex'>DAA Q&A (2022)</p>
                <a href={daaQA} download=""><button className='downloadbtn'><img className='downloadimg' src={downloadbtn} alt="download"/></button></a> 
            </div>
          </div>
        </div>
      );
}
