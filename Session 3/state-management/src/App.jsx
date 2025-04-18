import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const [text, setText] = useState("Hide");

  const changeText = () => {
    if (text == "Hide") {
      setText("Show");
    } else {
      setText("Hide");
    }
  };

  // const [name, setName] = useState("Krish");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const changeName = () => {
    setName("Rahul");
  };

  return (
    <>
      {/* <p>Counter: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}

      {/* <p>Name: {name}</p>
      <button onClick={changeName}>Change name</button> */}

      <p>{text}</p>
      <button onClick={changeText}>Toggle text</button>
    </>
  );
}

export default App;
