import React,{Component} from "react";
class FriendDetailsComp extends Component{
    render (){
        const {name,contact,gender,address}=this.props;
        return (
            <div>
            <h2> This is class component</h2>
            {/* <p>product:{this.props.pname},price:{this.props.price},company:{this.props.company}</p> */}
            <p>name:{name},contact:{contact},gender:{gender} address:{address}</p>

            </div>
        )
    }
}
export default FriendDetailsComp;