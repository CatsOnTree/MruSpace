import React from 'react'
import "../css/materialpg.css";
import downloadbtn from '../images/downloadbtn.png';
import m1QA from '../resources/M1 Q&A.pdf'
export default function Matdbms() {
    return (
        <div>
          <div className="mat-rightcon-1">
          <p className='mat-rc-1-p'>Maths-1</p>
            <div className='disflex'>
                <p id='matbtndesnam' className='disflex'>M1 Q&A (2022)</p>
                <a href={m1QA} download=""><button className='downloadbtn'><img className='downloadimg' src={downloadbtn} alt="download"/></button></a> 
            </div>
          </div>
        </div>
      );
}
