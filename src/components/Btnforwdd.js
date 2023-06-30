import React from 'react'
import './css/wddbtnstyle.css'
export default function Btnforpp({wddtitles,wddhandleButtonClick,promenuwddbtn}) {

    const titleobj = wddtitles.map((ele)=> {
    return <div className='wddbtncon'>
    <button className='wdd_btn_cmcls' onClick={() => {wddhandleButtonClick(ele.fun);promenuwddbtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    {/* <hr/> */}
    <div className='wdd_lineunder_prgm'></div>
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}

