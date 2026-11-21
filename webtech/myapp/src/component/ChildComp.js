import React, {Component} from "react";
const ChildComp=(props)=>{
    // const ChildComp=(props)=>{
        const {newItem,newPrice,parentmethod}=props;
    
        return(
            <div>
                <h2>This is child component</h2>
                <div>
                    vadapav:{props.newItem}
                </div>
                <div>
                    price:{props.newPrice}
                </div>
                <button type='button' onClick={props.parentmethod}>change item</button>

            </div>
        )
    }


export default ChildComp;