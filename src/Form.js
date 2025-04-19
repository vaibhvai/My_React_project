import { useState } from "react";
import {useNavigate } from 'react-router-dom';
const Form = (props) => {
const [FormData, setFormData] = useState({
    name : '',
    email : '',
    password : ''
})
const navigate = useNavigate()
const [Errors, setErrors] = useState({})
const validate = () => {
    const Newerrors = {}
    if(!FormData.name){
        Newerrors.name ='name is required'
    }
    if(!FormData.email) {
       Newerrors.email = 'email is required'
    }  else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
        Newerrors.email = 'Email is invalid';
      }
    if(FormData.password.length < 6 || !FormData.password) {
        Newerrors.password = 'password length should be maximum 6'
    }
    return Newerrors
}
const handlesubmit = () => {
    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
    } else{
   
        setFormData({name :'', email: '' , password: '' })
        console.log(FormData)
        setErrors({})
        navigate('/success')
    }

  
}
const handleChange = (e) => {
const {name,value}= e.target
setFormData({...FormData, [name] : value})
setErrors({...Errors, [name] : ''})
}
    return (
        <form>
            <label>Name</label>
            <input
                type="text"
                name='name'
                value={FormData.name}
                onChange={handleChange}
                placeholder="Name" />
          {Errors.name && <p style={{color:'red'}}> {Errors.name}</p>}
          <div>
          <label> Email</label>
            <input
                type="email"
                name='email'
                value={FormData.email}
                onChange={handleChange}
                placeholder="Email" />
                 {Errors.email && <p style={{color:'red'}}> {Errors.email}</p>}
          </div>
          <div>
          <label> Password</label>
            <input
                type="password"
                name='password'
                value={FormData.password}
                onChange={handleChange}
                placeholder="Password" />
                 {Errors.password && <p style={{color:'red'}}> {Errors.password}</p>}
          </div>
         
          <div>
          <button
                type='submit'
                onClick={(event) => {
                    event.preventDefault();
                   handlesubmit()
                //   alert('form Sucessfully Submitted')
                }}>
                Submit
            </button>
          </div>


            
        </form>
    )
}
export default Form