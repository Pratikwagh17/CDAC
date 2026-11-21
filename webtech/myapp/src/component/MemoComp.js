import React from "react";
 const MemoComp =()=>{
    return (
        <div>
            <h2>this is memo</h2>
        </div>
    )
 }
export default React.memo(MemoComp);