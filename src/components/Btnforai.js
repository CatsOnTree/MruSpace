import React from 'react'
import './css/aibtnstyle.css'
export default function Btnforai({aititles,aihandleButtonClick,promenuaibtn}) {

    const titleobj = aititles.map((ele)=> {
    return <div className='aibtncon'>
    <button className='ai_btn_cmcls' onClick={() => {aihandleButtonClick(ele.fun);promenuaibtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    <div className='ai_lineunder_prgm'></div>
    {/* <hr/> */}
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}

