// import logo from './logo.svg';
// import React, { Suspense } from "react";
// import './App.css';
// import Counter from './Hooks/Counter';
// import TextField from './Hooks/TextField';
// import Checkbox from './Hooks/Checkbox';
// import Forms from './Hooks/Forms';
// import UpdateState from './Hooks/UpdateState';
// import FormObject from './Hooks/Objects/FormObjects';
// import FormNestedObject from './Hooks/Objects/FormNestedObject';
// import TaskApp from './Hooks/Arrays/ListArray';
// import BucketList from './Hooks/Arrays/Immer';
// import TodoList from './Hooks/InitializerFunction/InitializerFunc';
// import TodoListInitializerState from './Hooks/InitializerState/InitializerState';
// import ResetStateWithKey from './Hooks/ResettingStateWIthKey/ResetStateWithKey';
// import SneatDemo from './SneatDemo';
// // const SneakDemoLazy = React.lazy(()=>import("./SneatDemo"));

// function App() {
//   return (
//     <div className="App">
//    {/* <Counter/><br/>
//    <TextField/><br/>
//    <Checkbox/><br/>
//    <Forms/><br/>
//    <UpdateState/><br/>
//    <FormObject/><br/>
//    <FormNestedObject/> */}
//    {/* <TaskApp/> */}
//    {/* <BucketList/> */}
//    {/* <TodoList/> */}
//    {/* <TodoListInitializerState/> */}
//    {/* <ResetStateWithKey/> */}
//    {/* <h2>React App with Web app service deployment</h2> */}
//    <SneatDemo/>
//    {/* <Suspense fallback={<div>Loading...</div>}>
//     <SneakDemoLazy/>
//    </Suspense> */}
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect, useCallback } from 'react';

// const DebouncedSubmitButton = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Debounce delay in milliseconds
//   const debounceDelay = 500;

//   const debounce = useCallback(
//     // Function to be debounced
//     () => {
//       // Perform your API call here
//       console.log('API call');
//       setIsSubmitting(false);
//     },
//     [] // Empty dependency array to ensure the function remains the same across re-renders
//   );

//   // Effect to handle the debounce logic
//   useEffect(() => {
//     const timeoutId = setTimeout(debounce, debounceDelay);

//     // Cleanup function to cancel the debounce timer on component unmount or when debounceDelay changes
//     return () => clearTimeout(timeoutId);
//   }, [debounce, debounceDelay]);

//   const handleClick = () => {
//     setIsSubmitting(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick} disabled={isSubmitting}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default DebouncedSubmitButton;


import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    let timerId;

    if (submitClicked) {
      // Call your API here
      // Example: makeApiCall();

      // Set a timer to call the API again after 5 seconds
      timerId = setInterval(() => {
        // Call your API here again
        // Example: makeApiCall();
      }, 5000);
    }

    // Cleanup function to clear the timer when the component unmounts or submitClicked changes
    return () => {
      clearInterval(timerId);
    };
  }, [submitClicked]);

  const handleClick = () => {
    setSubmitClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default MyComponent;