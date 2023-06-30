import React from 'react'
import './css/dspbtnstyle.css'
export default function Btnfordsp({titles,handleButtonClick,promenudspbtn}) {

    const titleobj = titles.map((ele)=> {
    return <div className='dspbtncon'>
    <button className='dsp_btn_cmcls' onClick={() => {handleButtonClick(ele.fun);promenudspbtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    {/* <hr/> */}
    <div className='dsp_lineunder_prgm'></div>
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}
