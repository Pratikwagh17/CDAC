import React, {Component,PureComponent} from "react";
class PureComp extends PureComponent{
    render(){
        console.log("pure component");
        return(
            <div>
                <h2>this is pure  component</h2>
                <div>Item:{this.props.newItems}</div>
            </div>
        )
    }
}
export default PureComp;
