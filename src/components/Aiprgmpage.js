import React,{useState} from 'react'
import './css/aiprgm.css'
import Btnforai from "./Btnforai";
import AiPrgmMobiMenu from './aiprograms/AiPrgmMobiMenu';
import AiContent from './aiprograms/AiContent';
import Aiaddingsoon from './aiprograms/Aiaddingsoon';

export default function Aiprgmpage() {
 const [aiterm, aisetterm] = useState("!");
  const aitermhandle = (e) => {
    var inp = e.target.value;
    aisetterm(inp.toLowerCase());
  };

  const aititles = [
    { id: "ai1", title: "Water Jug W1!", fun: "ComponentA" },
    { id: "ai2", title: "Snake & Ladder W1E1!", fun: "ComponentB" },
    { id: "ai3", title: "Tic Tak Toe W2!", fun: "ComponentC" },
    { id: "ai4", title: "Box-Line game W2E!", fun: "ComponentD" },
    { id: "ai5", title: "TSP Heuristic W3!", fun: "ComponentE" },
    { id: "ai6", title: "Min Jumps W3E!", fun: "ComponentF" },
    { id: "ai8", title: "Towe Of Hanoi!", fun: "ComponentH" },
    { id: "ai7", title: "More!", fun: "ComponentG" },
    // { id: "ai9", title: "p9!", fun: "ComponentI" },
  ];

  let aifilterList = aititles.filter((item) => {
    return item.title.toLowerCase().includes(aiterm);
  });

  const [aiactiveComponent, aisetActiveComponent] = useState(null);

  const aihandleButtonClick = (componentName) => {
    aisetActiveComponent(componentName);
  };

  const [aimobisearchopen,aisetmobiactive]=useState(true)
  const promenuai=()=>{
    aisetmobiactive(wasOpened => !wasOpened)
  }
  const promenuaibtn=(elee)=>{
    aisetmobiactive(elee)
  }

  const aicomponents = {
    // ComponentA: <Aiwaterjug/>,
    // ComponentB: <Aisnakeladder/>,
    // ComponentC: <AiTicTac/>,
    // ComponentD: <AiBoxLinegame/>,
    // ComponentE: <AiTspValue/>,
    // ComponentF: <AiMinjumps/>,
    ComponentG: <Aiaddingsoon/>,
    ComponentA: <AiContent aiactiveComponent={aiactiveComponent}/>,
    ComponentB: <AiContent aiactiveComponent={aiactiveComponent}/>,
    ComponentC: <AiContent aiactiveComponent={aiactiveComponent}/>,
    ComponentD: <AiContent aiactiveComponent={aiactiveComponent}/>,
    ComponentE: <AiContent aiactiveComponent={aiactiveComponent}/>,
    ComponentF: <AiContent aiactiveComponent={aiactiveComponent}/>,
    ComponentH: <AiContent aiactiveComponent={aiactiveComponent}/>,
    // ComponentG: <AiContent aiactiveComponent={aiactiveComponent}/>,

  };

  return (
    <>
      <div>
      <div className="nav-escape-box-pmobi"></div>
    <div className="nav-escape-box-Pmoni"></div>
        <div className="aimobimaincon">
        <button onClick={promenuai} id="aiprgmmenubtn">AI Programs Menu</button>
          {aimobisearchopen && (<AiPrgmMobiMenu promenuaibtn={promenuaibtn} aifilterList={aifilterList} aihandleButtonClick={aihandleButtonClick}/>)}
        </div>

        <div className="ai-container">
          <div className="ai-leftcon">
            <div className="ai-leftcon-1">
              <p id="ai_programs_sidebar_h">Programs</p>
              <input
                type="text"
                id="ai-input"
                placeholder="Search Program"
                value={aiterm}
                onChange={aitermhandle}
                onFocus={() => aisetterm("")}
              />
            </div>
            <div className="ai-leftcon-2">
              <Btnforai
                aititles={aifilterList}
                aihandleButtonClick={aihandleButtonClick}
              />
            </div>
          </div>
          <div className="ai-rightcon">
            {aiactiveComponent && aicomponents[aiactiveComponent]}
          </div>
        </div>
      </div>
    </>
  );
}
