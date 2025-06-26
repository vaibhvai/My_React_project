import { useState } from "react"
import { useDispatch } from "react-redux"
import { signup, login } from "../store"
const Login = () => {
    const [form, setForm] = useState({ username: '', password: '', phone: '' })
    const [isLogin, setIsLogin] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
       e.preventDefault()
       isLogin ? dispatch(login(form)) : dispatch(signup(form));

    }
    return (
        <>
           <div className="doctorform">
             <h1 style={{ textAlign: 'center' }}>
                {isLogin ? 'MyDoctor SignUp' : 'MyDoctor SignIn'}
            </h1>
            <form className="authForm" onSubmit={handleSubmit} >
                <input type="text" placeholder="Username" onChange={e => setForm({...form, username: e.target.value})}/>
                <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
                {isLogin && <input type="number" placeholder="Phone Number" onChange={e => setForm({...form, phone: e.target.value})}/>}
                <button onClick={() => setIsLogin(!isLogin)}> 
                {isLogin ? 'Login' :'Signin'}
            </button>
            </form>
           </div>
            
            </>
    )
}
export default Login