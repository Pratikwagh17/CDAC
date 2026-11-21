import React, {Component} from "react";
class StateComp extends Component{
    constructor(props){
        super(props);
        this.state={
            fname:"wagh",
            sal:50000
        }
    }

    changeState=()=>{
        this.setState((prevstate)=>({fname:"wagh Pratik",sal:prevstate.sal+1000}));
    }




    render (){
        return(
            <div>
                <h2>This is state component</h2>
                <p>Name:{this.state.fanme},salary:{this.state.sal}</p>
                <button type="button" onClick={()=>this.changeState()}>Change state</button>{"  "}
                <button type="button" onClick={()=>this.setState((prevstate)=>({fname:"wagh pratik",sal:prevstate.sal+1000}))}>Change state</button>{"  "}

            </div>
        )
    }

}
export default StateComp;