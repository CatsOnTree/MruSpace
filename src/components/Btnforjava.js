import React from 'react'
import './css/javabtnstyle.css'
export default function Btnforjava({javatitles,javahandleButtonClick,promenujavabtn}) {

    const titleobj = javatitles.map((ele)=> {
    return <div className='javabtncon'>
    <button className='java_btn_cmcls' onClick={() => {javahandleButtonClick(ele.fun);promenujavabtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    <div className='java_lineunder_prgm'></div>
    {/* <hr/> */}
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}

