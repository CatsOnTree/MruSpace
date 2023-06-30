import React from 'react'
import "../css/wddprgm.css";
import Copybtnwdd from './Copybtnwdd';
export default function WddPrgmCom({propsContent}) {
const text= propsContent.code;
    return (
        <div>
          <div className="wdd-rightcon-1">
            <div className="wdd-rc-1headingcon">
              <p>{propsContent.heading}</p>
            </div>
            <div className="wdd-right-prgmcon">
              <Copybtnwdd text={text}/>
              <pre>
                <code className='font-monospace'>
                  {propsContent.code}
                </code>
              </pre>
            </div>
            <div className="wdd-rc-1headingcon">
              <p>Output</p>
            </div>
            <div className="wdd-right-outputcon">
              <pre className='font-monospace'>
                {propsContent.output !== "" && propsContent.output}
              </pre>
            </div>
          </div>
        </div>
      );
}
