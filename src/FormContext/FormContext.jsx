import { createContext, useContext, useState } from "react";

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
    return(
        <FormContext.Provider value={{handleChane, hanndleSubmit, Formdata, error}}>
            {children}
        </FormContext.Provider>
    )
 }