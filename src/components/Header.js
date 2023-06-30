import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/m-logo.png";
// import searchlogo from "./images/icons8-search-30.png";
// import profilelogo from "./images/profile icon-05.png";
// import downlogo from "./images/icons8-expand-arrow-50.png"
import "./css/Header.css";
import ToolDropDown from "./ToolDropDown";
import { useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function Uploadpageloadfun() {
    // window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdEaMzGeSvqBH5kIdeVi6altjL38OLhh846INM9DYlEPepgrA/viewform";
    navigate("/Uploadpage");
  }

  const goToProgramPage = ()=>{
    navigate("/Program")
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
 const Aboutpageloadfun=()=>{
  navigate('about')
 }
 let csstyle = {
  backgroundColor: 'transparent'
 }
 const location = useLocation();

   // Check if the current URL matches the desired page
   if (location.pathname === '/') {
     csstyle = {
      backgroundColor: 'transparent'
     };
    }
    else if(location.pathname === '/Program') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
    else if (location.pathname === '/Uploadpage') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/Program') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/Materials') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/QuestionPapers') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/dspprograms') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/ppprograms') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/wddprograms') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/javaprograms') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/aiprograms') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     else if (location.pathname === '/about') {
      csstyle = {
       backgroundColor: '#1C1C1C'
      };
     }
     
     
    
  

  return (
    <nav style={csstyle}>
      <div id="nav_1">
        <ul id="toolsid">
          <li className="aligncenter" style={{ cursor: "pointer" }}>
            <img
              src={logo}
              alt="logo"
              id="logo"
              onClick={() => Homepageloadfun()}
            />
          </li>
          <li className="aligncenter toolsclass" >
            <ToolDropDown />
          </li>
        </ul>
        <ul>
        <li onClick={()=>QnPaperPage()} className="ul-li-hlist">Questions</li>
        <li onClick={()=>MaterialPage()} className="ul-li-hlist">Materials</li>
        <li onClick={()=>goToProgramPage()} className="ul-li-hlist">Programs</li>
      
      </ul>
        <ul id="uploadid">
          <li
            className="hovernavclass upldclassmobile"
            onClick={() => Uploadpageloadfun()}
            style={{ cursor: "pointer" }}
          >
            Upload
          </li>
          <li
            className="hovernavclass abtclassmobile"
            onClick={() => Aboutpageloadfun()}
            style={{ cursor: "pointer" }}
          >
            About
          </li>
          </ul>
        {/*   <li className="aligncenter">
            <img src={searchlogo} alt="search" id="search_logo" />
          </li>
          <li className="aligncenter">
            <img src={profilelogo} alt="profile" id="profile_logo" />
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Header;
