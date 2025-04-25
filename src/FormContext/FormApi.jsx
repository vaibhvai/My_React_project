import { UseFormContext } from "./FormContext"

const FormApi =() => {
    const {handleChane, hanndleSubmit, Formdata, error} = UseFormContext()
    return(
        <form onSubmit={hanndleSubmit}>
            <label>
                Name:
                <input
                type="text"
                value={Formdata.name}
                onChange={handleChane}
                name="name"/>
                {error.name && <span style={{color:'red'}}> {error.name}</span>}
            </label>
            <label>
               Email:
                <input
                type="text"
                value={Formdata.mail}
                onChange={handleChane}
                name="mail"/>
                {error.mail && <span style={{color:'red'}}> {error.mail}</span>}
            </label>
            <label>
               Password:
                <input
                type="text"
                value={Formdata.password}
                onChange={handleChane}
                name="password"/>
                {error.password && <span style={{color:'red'}}> {error.password}</span>}
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default FormApi