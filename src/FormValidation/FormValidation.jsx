import InputForm from "./InputForm";
import { useState } from "react";

const FormValidation = () => {
    const [FormData, setFormData] = useState({
        firstName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})
    const [users, setUsers] = useState([])
    const Validata = () => {
        const newErrors = {}
        if (!FormData.firstName.trim()) newErrors.firstName = 'Name is required!'
        if (!FormData.email.includes('@') || !FormData.email.includes('.com'))
        if (!FormData.mobile.length !== 10) newErrors.mobile = 'Mobile length should be 10'
        if (FormData.password.length < 6) newErrors.password = 'Password length minimum should be greater than'
        if (FormData.confirmPassword !== FormData.password) newErrors.confirmPassword = 'Please type correct password'
        return newErrors
    }
    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const Validateerrors = Validata()
        if (Object.keys(Validateerrors).length === 0) {
            const newUser = {
                id: users.length + 1,
                ...FormData
              };
              const updatedUsers = [...users, newUser];
              setUsers(updatedUsers)
              localStorage.setItem('users', JSON.stringify(updatedUsers))
            alert(`Form Submitted Sucessfully ${JSON.stringify(FormData)} `)
            setFormData({
                firstName: '',
                email: '',
                mobile: '',
                password: '',
                confirmPassword: ''
            })
            setErrors({})
        } else {
            setErrors(Validateerrors)
        }

    }
    return (
        <>
            <InputForm errors={errors} setErrors={setErrors} FormData={FormData} users={users} handleChange={handleChange} handleSubmit={handleSubmit} />
        </>
    )
}
export default FormValidation
