import React from 'react'
import './css/qnbtnstyle.css'
export default function BtnforQnpg({Qntitles,QnhandleButtonClick,promenuQnbtn}) {

    const titleobj = Qntitles.map((ele)=> {
    return <div className='Qnbtncon'>
    <button className='Qn_btn_cmcls' onClick={() => {QnhandleButtonClick(ele.fun);promenuQnbtn(false)}} key={ele.id} id={ele.id}>{ele.title}</button>
    {/* console.log(ele.fun) */}
    {/* <hr/> */}
    <div className='Qn_lineunder_prgm'></div>
    </div>
  })

  return (
    <div>{titleobj}</div>
  )

}

