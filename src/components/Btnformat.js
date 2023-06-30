import React from 'react'
import './css/matbtnstyle.css'
export default function Btnformat({mattitles,mathandleButtonClick,promenumatbtn}) {

    const titleobj = mattitles.map((ele)=> {
    return <div className='matbtncon'>
    <button className='mat_btn_cmcls' onClick={() => {mathandleButtonClick(ele.fun);promenumatbtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    {/* <hr/> */}
    <div className='mat_lineunder_prgm'></div>
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}

