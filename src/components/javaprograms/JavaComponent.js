import React from 'react'
import "../css/javaprgm.css";
import Copybtnjava from './Copybtnjava';

export default function JavaComponent({propsContent}) {
  const text = propsContent.code
    return (
        <div>
          <div className="java-rightcon-1">
            <div className="java-rc-1headingcon">
              <p>{propsContent.heading}</p>
            </div>
            <div className="java-right-prgmcon">
              <Copybtnjava text={text}/>
              <pre>
                <code className='font-monospace'>
                  {propsContent.code}
                </code>
              </pre>
            </div>
            <div className="java-rc-1headingcon">
              <p>Output</p>
            </div>
            <div className="java-right-outputcon">
              <pre className='font-monospace'>
                {propsContent.output}
              </pre>
            </div>
          </div>
        </div>
      );
}
