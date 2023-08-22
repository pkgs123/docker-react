import React, { useState } from "react";

function UpdateState() {
  const [age, setAge] = useState(30);

  function increment() {
    setAge((a) => a + 1);
  }

  function handleIncrement() {
    increment();
    increment();
    increment();
  }
  function handleIncBy1(){
    increment()
  }
  return (
    <>
      <h1>Your Age: {age}</h1>
      <button onClick={handleIncrement}>+3</button>
      <button onClick={handleIncBy1}>+1</button>
    </>
  );
}
export default UpdateState;
