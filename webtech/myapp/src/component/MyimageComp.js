import React from "react";
import imgPath from '../shared/constant/ConstantData';
const MyImageComp = ()=>{
    return (
        <div>
            <h2>images componant</h2>
            
            <img src={imgPath.jalebi} alt='jalebi' height="200px" width="200px"      /> 
            <img src={imgPath.ladoo} alt='laddo' height="200px" width="200px"      />   
             </div>
    )
}
export default MyImageComp;