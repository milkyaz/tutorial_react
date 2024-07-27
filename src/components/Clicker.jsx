// import { useEffect, useState } from "react";

// function Clicker() {
//   const [value, setValue] = useState(0);

//   function increment() {
//     setValue(value + 1);
//   }

//   function decrement() {
//     setValue(value - 1);
//   }

//   useEffect(() => {
//     console.log("hello from clicker", value);
//     return () => console.log('goodbye ')
//   }, [value]); //useEffet состоит из: 1. некая функция(действия которые мы хотим сделать). 2. [] - набор зависимостей.

//   return (
//     <div className="clicker">
//       <button onClick={decrement}>-</button>
//       <span style={{ display: "inline-block", margin: "0 0.5rem" }}>
//         {value}
//       </span>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

// export default Clicker;
