import React,{Component} from "react";
class ClassComp extends Component{
    render (){
        const {pname,price,company}=this.props;
        return (
            <div>
            <h2> This is class component</h2>
            {/* <p>product:{this.props.pname},price:{this.props.price},company:{this.props.company}</p> */}
            <p>product:{pname},price:{price},company:{company}</p>

            </div>
        )
    }
}
export default ClassComp;