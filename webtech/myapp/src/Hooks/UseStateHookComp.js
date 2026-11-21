import React,{useState} from 'react';
const UserStateHookComp=()=> {
    const [myName,setMyName]=useState("wagh")
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(["jalebi","laddoo","vadapav","paneer"]);

  return (
    <div>
        <h2>This is a UseStateHookComp</h2>
        <strong>Name:{myName}</strong>{"  "}
        <button type="button" className='btn btn-outline-primary' onClick={()=>setMyName("wagh pratik")}></button>
        <hr>
        </hr>
        <strong>counter:{count}
        </strong>{"  "}
        <button type="button" className='btn btn-outline-primary' onClick={()=>setCount(count+1)}>increament count</button>

        <ul>
            {item.map((val,index)=>{
                return<li key={index}>{val}</li>
            })}
            </ul>      
    </div>
  )
}

export default UserStateHookComp;
