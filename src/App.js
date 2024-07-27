import { useState, useEffect } from "react";
// import Clicker from "./components/Clicker";
import WithRef from "./components/Ref";

function App() {
  //состояние, видим мы кликер на странице или нет(фолс - не видим, тру - видим)
  // const [isClicker, setClicker] = useState(false);
  return (
    <div className="App">
      <h2>React App</h2>
      <WithRef />
      {/* кнопка, которая переключает состояние с фолс, на тру */}
      {/* <button onClick={() => setClicker(!isClicker)}>Toggle clicer</button>
      {isClicker && <Clicker />} */}
    </div>
  );
}

export default App;
