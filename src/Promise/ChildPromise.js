const ChildPromise = (props) => {
    return(
        <>
         <h1> Users List</h1>
        <input
        type="text"/>
        {props.errors && <p> {props.errors}</p>}
        <ul>
            {props.users.map(user => {
               return <li key={props.users}> {user.name}</li>
            })
               
            }
        </ul></>
    )
}
 export default ChildPromise