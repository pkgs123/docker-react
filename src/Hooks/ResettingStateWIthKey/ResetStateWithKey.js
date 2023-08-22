import React, { useState } from "react";

export default function ResetStateWithKey(){
    const [version,setVersion] = useState(0);
    function handleReset(){
        setVersion(version+1)
    }
    return(
        <>
        <button onClick={handleReset}>Reset</button>
        <Form key={version}/>
        </>
    )
}
function Form(){
    const [name,setName] = useState('Prashant');
    return(
        <>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <p>Hello,{name}</p>
        </>
    )
}