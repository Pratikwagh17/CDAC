const GreetingComp=()=>{
    const greetings=()=>{
        window.alert("Nice to meet you");
    }
    const welcome=()=>{
        window.alert("Welcome you all");
    }
    return (
        <div>
            <h2>This is greeting message</h2>
            <button type="button" onClick={()=>greetings()}>Click on me</button>
            <h2 onMouseOver={()=>welcome()}>Hover on me</h2>
        </div>
    )
}
export default GreetingComp;