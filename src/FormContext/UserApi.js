import { UseFormContext } from "./FormContext";
const UserApi =() => {
    const {users, loading, fetchusers, error1} = UseFormContext()
    return(
        <div>
            <button onClick={fetchusers} disabled={loading}>
                {loading ? 'Loading' : 'Refresh'}
            </button>
            {error1 && <p style={{ color: 'red' }}>{error1}</p>}
            {users.map((user) => (
        <div key={user.id}>

          <p>{user.name} </p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
        </div>
      ))}
        </div>
    )
}
export default UserApi