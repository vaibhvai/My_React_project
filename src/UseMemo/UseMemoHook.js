import { useMemo, useState } from "react"

const factorial =(n) => {
  if(n < 0) return -1
  if(n=== 0) return 1
  let result = 1
  for(let i = 1; i<=n; i++) {
    result *= i
  }
  return result
}


  const UseMemoHook = () => {
    const [num, setNum] = useState(0); 
  
   const memorizalFactor = useMemo(() => factorial(num), [num])
  
    return (
      <>
        <h1>Fibonacci {num} of {memorizalFactor} </h1>
        <input
          type="number"
          onChange={e => setNum(e.target.value)}
        />
      </>
    );
  };
                             
  export default UseMemoHook
