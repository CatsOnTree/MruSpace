import React from 'react'
import "../css/materialpg.css";
import downloadbtn from '../images/downloadbtn.png';
import pythonQA from '../resources/PP Q&A.pdf'
export default function Matpython() {
    return (
        <div>
          <div className="mat-rightcon-1">
            <p className='mat-rc-1-p'>Python</p>
            <div className='disflex'>
                <p id='matbtndesnam' className='disflex'>PP Q&A (2022)</p>
                <a href={pythonQA} download=""><button className='downloadbtn'><img className='downloadimg' src={downloadbtn} alt="download"/></button></a> 
            </div>
          </div>
        </div>
      );
}
