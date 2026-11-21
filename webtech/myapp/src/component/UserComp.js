import React from 'react'

const UserComp=(props)=> {
    if(props.user==="wagh"){
        throw Error("not a user");
        
    }
  return <h2>this is:{props.user}</h2>
}

export default UserComp
 