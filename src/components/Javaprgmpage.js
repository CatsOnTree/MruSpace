import React,{useState} from 'react'
import './css/javaprgm.css'
import Btnforjava from "./Btnforjava";
import JavaPrgmMobiMenu from './javaprograms/JavaPrgmMobiMenu';
import JavaUserDP from './javaprograms/JavaUserDP';
import JavaNestedPack from './javaprograms/JavaNestedPack';
import JavaContent from './javaprograms/JavaContent';


export default function Javaprgmpage() {
 const [javaterm, javasetterm] = useState("!");
  const javatermhandle = (e) => {
    var inp = e.target.value;
    javasetterm(inp.toLowerCase());
  };

  const javatitles = [
    { id: "java1", title: "Palindrome!", fun: "ComponentA" },
    { id: "java2", title: "Fibonacci Series!", fun: "ComponentB" },
    { id: "java3", title: "Arithmetic!", fun: "ComponentC" },
    { id: "java3a", title: "StringTokenizer W2a!", fun: "ComponentCA" },
    { id: "java4", title: "Inheritance W3!", fun: "ComponentD" },
    { id: "java5", title: "Super Keyword W3a!", fun: "ComponentE" },
    { id: "java6", title: "Final Class W3b!", fun: "ComponentF" },
    { id: "java7", title: "Method Overloading W4a!", fun: "ComponentG" },
    { id: "java8", title: "Method Overriding W4b!", fun: "ComponentH" },
    { id: "java9", title: "Abstract Class W4Ea!", fun: "ComponentI" },
    { id: "Qn10", title: "Abstraction W4Eb!",fun:'ComponentJ' },
    { id: "Qn11", title: "Interface w5!",fun:'ComponentK' },
    { id: "Qn12", title: "Inner Class w5Ea!",fun:'ComponentL' },
    { id: "Qn13", title: "Multilevel Inheritance w5Eb!",fun:'ComponentM' },
    { id: "Qn14", title: "Deaflut Method W5Eb!",fun:'ComponentN' },
    { id: "Qn15", title: "User-Defined package W6!",fun:'ComponentO' },
    { id: "Qn16", title: "Nested Packages W6E!",fun:'ComponentP' },
    { id: "Qn17", title: "Exception handling W7a!",fun:'ComponentQ' },
    { id: "Qn18", title: "Throw Keyword W7b!",fun:'ComponentR' },
  ];

  let javafilterList = javatitles.filter((item) => {
    return item.title.toLowerCase().includes(javaterm);
  });

  const [javaactiveComponent, javasetActiveComponent] = useState(null);

  const javahandleButtonClick = (componentName) => {
    javasetActiveComponent(componentName);
  };

  const [javamobisearchopen,javasetmobiactive]=useState(true)
  const promenujava=()=>{
    javasetmobiactive(wasOpened => !wasOpened)
  }
  const promenujavabtn=(elee)=>{
    javasetmobiactive(elee)
  }

  const javacomponents = {
    ComponentO: <JavaUserDP/>,
    ComponentP: <JavaNestedPack/>,
    ComponentA: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentB: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentC: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentCA: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentD: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentE: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentF: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentG: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentH: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentI: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentJ: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentK: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentL: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentM: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentN: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentQ: <JavaContent javaactiveComponent={javaactiveComponent}/>,
    ComponentR: <JavaContent javaactiveComponent={javaactiveComponent}/>,

  };

  return (
    <>
      <div>
      <div className="nav-escape-box-pmobi"></div>
    <div className="nav-escape-box-Pmoni"></div>
        <div className="javamobimjavancon">
        <button onClick={promenujava} id="javaprgmmenubtn">java Programs Menu</button>
          {javamobisearchopen && (<JavaPrgmMobiMenu promenujavabtn={promenujavabtn} javafilterList={javafilterList} javahandleButtonClick={javahandleButtonClick}/>)}
        </div>

        <div className="java-contjavaner">
          <div className="java-leftcon">
            <div className="java-leftcon-1">
              <p id="java_programs_sidebar_h">Programs</p>
              <input
                type="text"
                id="java-input"
                placeholder="Search Program"
                value={javaterm}
                onChange={javatermhandle}
                onFocus={() => javasetterm("")}
              />
            </div>
            <div className="java-leftcon-2">
              <Btnforjava
                javatitles={javafilterList}
                javahandleButtonClick={javahandleButtonClick}
              />
            </div>
          </div>
          <div className="java-rightcon">
            {javaactiveComponent && javacomponents[javaactiveComponent]}
          </div>
        </div>
      </div>
    </>
  );
}
