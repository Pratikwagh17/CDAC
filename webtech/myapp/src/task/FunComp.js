const MyDetailsComp=(props)=>{
    const {name,contact,gender,address}=props;
    return (
        <div>
        <h2>This is function Component</h2>
        <p>this is a paraghraph</p>
        {/* <p>fname:{props.fname},lname:{props.lname},pin:{props.pin}</p> */}
         {/* //when we create const for variable we didnt 
        //use props in every name  */}
        <p> name:{name} contact:{7410741010} gender:{gender} address:{address}</p>
     </div>
    )
}
export default MyDetailsComp;