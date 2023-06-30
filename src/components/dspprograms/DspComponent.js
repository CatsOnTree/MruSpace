import React from "react";
import '../css/dspprgm.css'
import Copybtn from "./Copybtn";
export default function DspComponent({propsContent}) {
  const text = propsContent.code
  return (
    <div>
      <div className="dsp-rightcon-1">
        <div className="dsp-rc-1headingcon">
          <p>{propsContent.heading}</p>
        </div>
        <div className="dsp-right-prgmcon">
          <Copybtn text={text}/>
          <pre>
            <code className="font-monospace">
              {propsContent.code}
            </code>
          </pre>
        </div>
        <div className="dsp-rc-1headingcon">
          <p>Output</p>
        </div>
        <div className="dsp-right-outputcon">
          <pre className="font-monospace">
            {propsContent.output}
          </pre>
        </div>
      </div>
    </div>
  );
}
