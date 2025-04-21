// const UseMemoHook =() => {
// const [num, setNum] = useState(0);

import { useMemo, useState } from "react"

// const fibonacci = useMemo(() => {
//   const fib = (n) => {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
//   };
//   return fib(num);
// }, [num]);

// return (
//   <div>
//     <input
//       type="number"
//       value={num}
//       onChange={e => setNum(Number(e.target.value))}
//     />
//     <h2>Fibonacci of {num} is {fibonacci}</h2>
//   </div>
// );
// };
// export default UseMemoHook




  const UseMemoHook = () => {
    const [num, setNum] = useState(0); 
  
    const fibonacci = useMemo(() => {
      const fib = (n) => {                                                                                                                                   
        if (n <= 1) return n;
        const fibArray = [0, 1]; 
        for (let i = 2; i <= n; i++) {
          fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; 
        }
        return fibArray[n];
      };
      return fib(num);
    }, [num]);
  
    return (
      <>
        <h1>Fibonacci of {num} is {fibonacci}</h1>
        <input
          value={num}
          onChange={e => setNum(Number(e.target.value))}
          type="number"
        />
      </>
    );
  };
                             
  export default UseMemoHook
