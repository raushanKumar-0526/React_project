import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("Old value : ", counter)
    counter = counter + 1;
    setCounter(counter);
    console.log("New value : ", counter);
  }

  const subValue = () => {
    setCounter(counter -1);
  }

  return (
    <>
    <h1>Using Hook "useState" home page</h1>
    <h2>Count : {counter}</h2>
    <button onClick={addValue}>Add count</button>
    <br /><br />
    <button onClick={subValue}>Substract count</button>
    </>
  )
}

export default App
