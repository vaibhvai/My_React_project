import { useEffect, useState } from "react"
import ChildPromise from "./ChildPromise"

const FetchApi = () =>{
    const [users, setUsers] = useState([])
    const [errors, setError] = useState(null)
    const fetchData = () =>{
        const ApiUrl = 'https://jsonplaceholder.typicode.com/users'
        return new Promise((resolve, reject) => {
            fetch(ApiUrl).then(res => {
                if(!res.ok) {
                 reject(new Error('Network response was not ok '))
                } 
                return res.json()
            }).then(data => resolve(data))
             .catch(err => reject(err))
        })
     }
     useEffect(() => {
    fetchData().then(data => {
        setUsers(data)
        console.log(data)
    }).catch(
        err => {
            setError('Oopssss .... something went wrong')
        }
    )
     }, [])
    return(
        <>
       <ChildPromise errors={errors} setError={setError} users={users} setUsers={setUsers}/>
        </>
    )
}
export default FetchApi


//pure js :- 
// const Fetchdate = () => {
//     const ApiUrl = 'https://jsonplaceholder.typicode.com/users'

//     return new Promise((resolve, reject) => {
//         fetch(ApiUrl).then(
//             res => {
//                 if(!res.ok) {
//                     console.log(`Something went wrong`)
//                 }
//                 return res.json()
//             }).then(data => {
//             resolve(data)
//             }).catch(err => {
//             reject(err)
//             })
//     })
// }
//  const getData = async() => {
//     try {
//         const data = await Fetchdate()
//         console.log(data)
//     } catch (error) {
//         console.log('there something issue ')
//     }
// }
//  getData()