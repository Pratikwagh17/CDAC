import React, { useEffect, useState } from 'react'

const UseEffectHookComp=()=> {
    const [age,setage]= useState(18);
    useEffect(()=>{
        setage(age)
    })
  return (
    <div>
    <h2>This is UseEffectHookComp</h2>
    <strong>age:{age}</strong>
      
    </div>
  )
}

export default UseEffectHookComp
