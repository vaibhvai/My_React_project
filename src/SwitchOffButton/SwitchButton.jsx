import { useState } from "react"

const SwitchButton =() => {
    const[ison, SetOn] = useState(false)
    const buttonClick =() => {
        SetOn(!ison)
    }
    return (
        <button onClick={buttonClick} className={ ison ? 'On' : 'Off'} style={{backgroundColor: ison ? 'green' : 'red'}}>
           {ison ? 'On' : 'Off'}
        </button>
    )
}
export default SwitchButton