import React from 'react'
import './css/ppbtnstyle.css'
export default function Btnforpp({pptitles,pphandleButtonClick,promenuppbtn}) {

    const titleobj = pptitles.map((ele)=> {
    return <div className='ppbtncon'>
    <button className='pp_btn_cmcls' onClick={() => {pphandleButtonClick(ele.fun);promenuppbtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    <div className='pp_lineunder_prgm'></div>
    {/* <hr/> */}
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}

