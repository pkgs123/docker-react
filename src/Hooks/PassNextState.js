import React, { useState } from "react";

function PassNextState(){
    const[age,setAge] = useState();
    function increment(){
        setAge(age+1);
    }
    function handleAge(){
        increment()
        increment()
        increment()
    }
    return(
        <>
        <h1>Your age:{age}</h1>
        <button onClick={handleAge}>+3</button>
        <button onClick={()=>increment()}>+1</button>
        </>
    )
}
export default PassNextState;