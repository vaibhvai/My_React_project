import { useCallback, useState } from "react"
const CounterCallback = () => {
   const [count, setCount] = useState(0)
   const IncrementClick = useCallback(() => {
    setCount(prev => prev + 1)
   }, [])
    const DecrementClick = useCallback(() => {
        setCount(prev => prev -1)
    }, [])
    return (
        <>
        <h1>{count}</h1>
        <button 
        onClick={IncrementClick}
        style={{backgroundColor:'green'}}
        > Increment</button>
        <button
        onClick={DecrementClick}
        style={{backgroundColor:'red'}}> Decrement</button>
        </>
    )
}
 export default CounterCallback