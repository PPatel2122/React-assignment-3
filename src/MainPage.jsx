import React, { useState } from 'react'
import './MainPage.css'
import LeftBox from './LeftBox'
import RightBox from './RightBox'


const MainPage = () => {
  const [ON,setON]=useState(false)

  const [ONTO,setONTO]=useState(false)

  



  return (
    <>
    <h1>Styling using Functional and class Component</h1>

    <div className="butten">
      <div className="div">
    <button onClick={()=>setON(!ON)}>TO See styling in functional component</button>
    {ON? <LeftBox /> : null }
    </div>
 
<div className="div">
    <button onClick={()=>setONTO(!ONTO)}>TO See styling in Class component</button>
    {ONTO? <RightBox /> : null }
    </div>
   </div>

    
    </>
  )
}

export default MainPage