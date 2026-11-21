import React, { Component } from "react";
class CondionalRenComp extends Component {
constructor (props) {
super(props);
this.state = {isCond: true,};
}
render() {
    let msg="";
// 1. use of if else
if (!this.state.isCond) 
    {
        // return <h2>Admin Login</h2>;
        msg="admin login";
    } else {
        // return <h2>User Login</h2>;
        msg="user login"
        }
        return <h2>{msg}</h2>
    }
}
export default CondionalRenComp;