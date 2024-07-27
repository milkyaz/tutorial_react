import React from "react";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(false);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default App;
