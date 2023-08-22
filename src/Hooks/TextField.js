import React, { useState } from "react";

function TextField(){
    const[text,setText] = useState("Hello");
    function handleTextField(e){
        setText(e.target.value);
    }
    function handleReset(){
        setText("Hello");
    }
    return(
        <>
        <input value={text} onChange={handleTextField}/>
        <p>You typed Text: {text}</p>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default TextField;