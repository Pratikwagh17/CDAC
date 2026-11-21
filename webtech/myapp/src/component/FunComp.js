const FunComp=(props)=>{
    const {fname,lname,pin}=props;
    return (
        <div>
        <h2>This is function Component</h2>
        <p>this is a paraghraph</p>
        {/* <p>fname:{props.fname},lname:{props.lname},pin:{props.pin}</p> */}
         {/* //when we create const for variable we didnt 
        //use props in every name  */}
        <p>fname:{fname},lname:{lname},pin:{pin}</p>
     </div>
    )

}
export default FunComp;