import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("🔁 Component mounted/updated");
  }, [count2, count3]);

  return (
    <div>
      <h2>Count0: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Count1: {count1}</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <h2>Count2: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      <h2>Count3: {count3}</h2>
      <button onClick={() => setCount3(count3 + 1)}>Increment</button>
    </div>
  );
}

export default App;
