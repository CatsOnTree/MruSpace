import React from 'react'
import "../css/aiprgm.css";
import Copybtnai from './Copybtnai';
export default function AIComponent({propsContent}) {
  const text =propsContent.code;
    return (
        <div>
          <div className="ai-rightcon-1">
            <div className="ai-rc-1headingcon">
              <p>{propsContent.heading}</p>
            </div>
            <div className="ai-right-prgmcon">
              <Copybtnai text={text}/>
              <pre>
                <code className='font-monospace'>
                  {propsContent.code}
                </code>
              </pre>
            </div>
            <div className="ai-rc-1headingcon">
              <p>Output</p>
            </div>
            <div className="ai-right-outputcon">
              <pre className='font-monospace'>
                {propsContent.output}
              </pre>
            </div>
          </div>
        </div>
      );
}
