import { useMemo, useState } from "react"
  const FibonnaciLogic = (n) => {
        if (n <=1) return n
        return FibonnaciLogic(n-1) + FibonnaciLogic(n-2)
    }
const UseMemoFib =()=> {
   const [number, setNumber] = useState(1)
   const FibValue = useMemo(() => {
    return FibonnaciLogic(number)
   },[number])
    return (
        <>
        <h3>This is your Fibonnaci value {FibValue} of {number}</h3>
        <button onClick={() => setNumber(prev => prev +1)}> Next number</button>
        <button onClick={() => setNumber(1)}>Reset</button>
        </>
    )
}
export default UseMemoFib