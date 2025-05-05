import { createContext, useContext, useState } from "react";
import axios from "axios";

const FormContext = createContext()
 export const UseFormContext = () =>{
   return useContext(FormContext)
 }

 export const FormProvider = ({children}) => {
    const [error, setError] = useState({})
  const [Formdata, SetFormData] = useState({
    name: '',
    mail: '',
    password: ''
  })
  const handleChane =(e) => {
    const {name, value} = e.target
    SetFormData((prev) => ({...prev, [name] : value}))
  }
   const Validate = () => {
   const NewError = {}
   if(!Formdata.name) NewError.name ='Name is required'
   if(!Formdata.mail) NewError.mail = 'Email is required'
   if(!Formdata.password || Formdata.password.length < 4) NewError.password = 'Please enter valid password'
   setError(NewError)
   return Object.keys(NewError).length === 0
   }

   const hanndleSubmit = (e) => {
    e.preventDefault()
    if(Validate()){
        console.log('data submit', Formdata)
        localStorage.setItem('Formdata', JSON.stringify(Formdata))
        SetFormData({name : '', mail: '', password: ''})
        setError({})
    }
   
   }
   /////user context
   const [users,SetUsers]= useState([])
   const [loading, setLoading] = useState(false)
   const [error1, setError1] = useState(null)
   const fetchusers = async() => {
    setLoading(true)
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      SetUsers(res.data)
      setError(null)
    } catch (error) {
      setError('Failed something')
    }finally {
      setLoading(false);
    }
   }
    return(
        <FormContext.Provider value={{handleChane, hanndleSubmit, Formdata, error, users, loading, fetchusers, error1}}>
            {children}
        </FormContext.Provider>
    )
 }