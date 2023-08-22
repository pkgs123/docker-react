import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState("Prashant");
  const [age, setAge] = useState(30);
  function handleName(e) {
    setName(e.target.value);
  }
  function handleAge() {
    setAge(age + 1);
  }
  return (
    <>
      <input value={name} onChange={handleName} />
      <button onClick={handleAge}>Increment Age:{age}</button>
      <p>
        Hello,{name}. You are {age}
      </p>
    </>
  );
}
export default Forms;
