import React from 'react'
import { useNavigate } from "react-router-dom";
import './css/toolsdropdown.css'
export default function ToolDropDown({togglemenu}) {
  const navigate = useNavigate();
const togglemenu2 = ()=>{
  document.getElementById("sidebar").classList.toggle("active");
  // document.getElementById("toggledisable").classList.toggle("active");

}
  const goToProgramPage = ()=>{
   navigate("/Program")
   // alert("Clicked on Lets Code!")
  }
  const goTocontributorsPage = ()=>{
    navigate("/contributors")
    // alert("Clicked on Lets Code!")
   }
  const MaterialPage = () => {
   // alert("clicked on lets refer!!")
   navigate("/Materials")
  }
 const QnPaperPage = ()=>{
   navigate("/QuestionPapers")
 }
 const Homepageloadfun=()=>{
  navigate("/")
}

  return (

    <>
    <div id="sidebar" onClick={()=>togglemenu2()}>
      {/* <div className="toggle-btn" id='toggledisable' >
      Tools
      </div> */}
      <ul>
        <li onClick={()=>Homepageloadfun()}>Home</li>
        <div className='nav-line'></div>
        <li onClick={()=>QnPaperPage()}>Question Papers</li>
        <div className='nav-line'></div>
        <li onClick={()=>MaterialPage()}>Materials</li>
        <div className='nav-line'></div>
        <li onClick={()=>goToProgramPage()}>Programs</li>
        <div className='nav-line'></div>
        <li onClick={()=>goTocontributorsPage()}>Contributors</li>
        <div className='nav-line'></div>
      </ul>
    </div>
    </>
  )
}
