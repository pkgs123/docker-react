import React, { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    function handleCounter(){
        setCount(count+1);
    }
    return(
        <>
        <button onClick={handleCounter}>New Count is:{count}</button>
        </>
    )
}
export default Counter;