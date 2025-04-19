import { useState, useEffect, useMemo } from "react";
const Memohook = () =>{

//   const [count, setCount] = useState(0)
//   const [isRunning, setIsRunning] = useState(true)
//   useEffect(() => {
//     let interval
//     if (isRunning) {
//       interval = setInterval(() => {
//         setCount(prevcount => (prevcount + 1))
//       }, 500)
//     }
//     return () => clearInterval(interval)
//   }, [isRunning])
//   const squarecount = useMemo(() => {
//     return count * count
//   }, [count])
//   const handleStop = () => {
//     setIsRunning(false)
//   }
//   const handleStart = () => {
//     setIsRunning(true)
//   }
//   return (
//     <div className="App">
//       <h1> count :-<span style={{ color: 'red' }}> {count}</span></h1>
//       <h2> Here Time Square :- <span style={{ color: 'green' }}>{squarecount}</span></h2>
//       <div>
//         <button onClick={handleStart} style={{ backgroundColor: 'green', color: 'black' }}>START</button>
//         <div>
//           <button onClick={handleStop} style={{ backgroundColor: 'darkred', color: 'black' }}>STOP</button>
//         </div>
//       </div>
//     </div>
//   );
// }


/////example 2:-
const [num, setNum] = useState(0);

const fibonacci = useMemo(() => {
  const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };
  return fib(num);
}, [num]);

return (
  <div>
    <input
      type="number"
      value={num}
      onChange={e => setNum(Number(e.target.value))}
    />
    <h2>Fibonacci of {num} is {fibonacci}</h2>
  </div>
);
};
export default Memohook
