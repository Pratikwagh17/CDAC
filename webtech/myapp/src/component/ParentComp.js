import React, {Component} from "react";
import ChildComp from "./ChildComp";
import PureComp from './PureComp'

export class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state={
            food:"vadapav",
            price:100
        }
    }

    changeData=()=>{
        this.setState((prevstate)=>({food:"vadapav with chatni",price:prevstate.price+10}))
    }




    render (){
        return(
            <div>
                <h2>This is parent component</h2>
                <p>food:{this.state.food},price:{this.state.price}</p>
                <button type="button" onClick={this.changeData}>Change food</button>
                {/* <button type="button" onClick={()=>this.setState((prevstate)=>({food:"vadapav with chatni",price:prevstate.price+10}))}>Change price</button>{"  "} */}

                <ChildComp newitem={this.state.item}newprice={this.state.price} parentmethod={()=>this.changeData()}></ChildComp>
                <PureComp newItems={this.state.item}/>

            </div>
        ) 
    }

}
export default ParentComp;