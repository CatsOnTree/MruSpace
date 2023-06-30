import React from 'react'
import akashimg from './images/akashprofileimg.jpeg'
import rightbracketgreen from "./images/right-bracket-green.png";
import rightbracketpink from "./images/right-bracket-pink.png";
import leftbracketgreen from "./images/left-bracket-green.png";
import leftbracketpink from "./images/left-bracket-pink.png";
import githubgreen from "./images/github-green.png";
import instagreen from "./images/instagram-green.png";
import linkedingreen from "./images/linkedin-green.png";
import twittergreen from "./images/twitter-green.png";
import instapink from "./images/instagram-pink.png";
import twitterpink from "./images/twitter-pink.png";
import linkedinpink from "./images/linkedin-pink.png";
import './css/about.css'
export default function About() {
  return (<>
    <div className="container-3" id="aboutpage">
    <div className="con-3-1 reveal">
      <p id="abtus">About us</p>
    </div>
    <div className="con-3-2 reveal">
      <div className="con-3-2-1">
        <pre style={{ display: "flex" }}>
          <img
            src="https://www.anilreddy.ml/img/20221219_152511.png"
            alt="circle"
            id="profimg1"
          ></img>
          &nbsp;&nbsp;<p id="proname1">AnilReddy</p>
          <p id="prostat1">.Developer</p>
        </pre>
        <div className="prof1des">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src={leftbracketgreen}
              className="bracketimg"
              alt="bracket"
            />
            As a React web developer, I craft dynamic user interfaces with
            React and transform ideas into exceptional web experiences using
            React, HTML, CSS, and JavaScript. With strong problem-solving
            skills and a dedication to clean, maintainable code.
            <img
              src={rightbracketgreen}
              className="bracketimg"
              alt="bracket"
            />
          </p>
          <span className="socialiconcon">
            <a
              className="altsocial"
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/in/anil-reddy-513866227"
            >
              <img
                className="socialicon socialicontran"
                src={linkedingreen}
                alt="linkedin"
              />
            </a>
            <a
              className="altsocial"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/anilreddydev"
            >
              <img
                className="socialicon socialicontran"
                src={githubgreen}
                alt="github"
              />
            </a>
            <a
              className="altsocial"
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/i_anilreddy"
            >
              <img
                className="socialicon socialicontran"
                src={twittergreen}
                alt="twitter"
              />
            </a>
            <a
              className="altsocial"
              rel="noreferrer"
              target="_blank"
              href="https://instagram.com/i_am_anilreddy"
            >
              <img
                className="socialicon socialicontran"
                src={instagreen}
                alt="instagram"
              />
            </a>
          </span>
        </div>
      </div>
    </div>

    <div className="con-3-2 reveal">
      <div className="con-3-2-1">
        <pre style={{ display: "flex" }}>
          <img
            src={akashimg}
            alt="circle"
            id="profimg1"
            style={{ border: "3px solid #F21DE8" }}
          ></img>
          &nbsp;&nbsp;
          <p id="proname1" style={{ color: "#F21DE8" }}>
            AkashKalwa
          </p>
          <p id="prostat1">.Designer</p>
        </pre>
        <div className="prof1des" style={{ marginBottom: "20px" }}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src={leftbracketpink}
              className="bracketimg"
              alt="bracket"
            />
            Hi Guys! I am very passionate about graphic designing. I like to
            make logos conceptual and meaningful. I make concept arts and
            posters. Minimal and meaningful is my motto. I don’t talk much,
            but my designs will!!
            <img
              src={rightbracketpink}
              className="bracketimg"
              alt="bracket"
            />
          </p>
          <div className="socialiconcon">
            <a
              className="altsocial"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/inst_a_kash/?igshid=YmMyMTA2M2Y%3D"
            >
              <img className="socialicon" src={instapink} alt="instagram" />
            </a>
            <a
              className="altsocial"
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/akash_kalwa?t=vXGOUE4RpQ91VNhH-NmHNg&s=08"
            >
              <img className="socialicon" src={twitterpink} alt="twitter" />
            </a>
            <a
              className="altsocial"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/akash-kalwa-801780243"
            >
              <img
                className="socialicon"
                src={linkedinpink}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
}