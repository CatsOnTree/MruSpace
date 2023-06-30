import React from 'react'
import "../css/ppprgm.css";
import Copybtnpp from './Copybtnpp';
export default function PpPrmCom(props) {
  const text=(props.propsContent.code)
    return (
        <div>
          <div className="pp-rightcon-1">
            <div className="pp-rc-1headingcon">
              <p>{props.propsContent.heading}</p>
            </div>
            <div className="pp-right-prgmcon overflow-x">
              <Copybtnpp text={text}/>
              <pre>
                <code className='font-monospace'>
                  {props.propsContent.code}
                </code>
              </pre>
            </div>
            <div className="pp-rc-1headingcon">
              <p>Output</p>
            </div>
            <div className="pp-right-outputcon">
              <pre className='font-monospace'>
                {props.propsContent.output}
              </pre>
            </div>
          </div>
        </div>
      );
}
