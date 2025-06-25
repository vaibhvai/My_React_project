import React, { useEffect, useState } from "react";
import axios from "axios";
const UseForm = () => {
    const [data, setdata] = useState([])
    const [Laoding, setloading] = useState(true)
    const [errormsg, setErrorMsg] = useState('')
    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const res = axios('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    setdata(res.data)
                    setFilteredUsers(res.data)
                    console.log(res.data)
                    setloading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setloading(false)
                })
        }, 5000);
    }, [])
    if (Laoding) return <h2 style={{ textAlign: 'center' }}> Wait for minute!!</h2>

    const handlesearch = (e) => {
        e.preventDefault()
        const trimmed = searchInput.trim().toLowerCase()
        if (trimmed === "") { 
           setFilteredUsers(data)    // Show all data
        setErrorMsg('')
        }
        else {
            const filterd = data.filter(user => user.name.toLowerCase().includes(trimmed) ||
                user.email.toLowerCase().includes(trimmed)
            )
            setFilteredUsers(filterd)
            setErrorMsg(filterd.length === 0 ? 'No matching users found!' : '')
        }

    }
    const clearInput = (e) => {
          e.preventDefault()
          setFilteredUsers(data)
          setErrorMsg('')
        setSearchInput('')
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}> User Information Data</h2>
            <form onSubmit={handlesearch} style={{ display: 'flex' }}>
                <input
                    type="text"
                    placeholder="Search Users...."
                    style={{ padding: '8px', width: '91rem', marginRight: '10px', marginBottom: '15px' }}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button id="closebtn" style={{position:'absolute', right:' 200px',top:'75px', background:'none', border: 'none'}} onClick={clearInput}> X </button>
                <button
                    type="submit"
                    style={{ width: '104px', height: '35px', backgroundColor: "rgb(48, 133, 214)", color: "white", border: 'none' }}
                >
                    Search
                </button>
            </form>

            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead style={{ backgroundColor: '#f2f2f2' }}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {filteredUsers.length === 0 && <h1 style={{ color: 'red', textAlign: 'center' }}>{errormsg}</h1>}

        </div>

    )
}
export default UseForm