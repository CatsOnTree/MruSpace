import React from 'react'
import "../css/materialpg.css";
import downloadbtn from '../images/downloadbtn.png';
import dbmsQA from '../resources/DBMS Q&A.pdf'
export default function Matdbms() {
    return (
        <div>
          <div className="mat-rightcon-1">
          <p className='mat-rc-1-p'>DBMS</p>
            <div className='disflex'>
                <p id='matbtndesnam' className='disflex'>DBMS Q&A (2022)</p>
                <a href={dbmsQA} download=""><button className='downloadbtn'><img className='downloadimg' src={downloadbtn} alt="download"/></button></a> 
            </div>
          </div>
        </div>
      );
}
