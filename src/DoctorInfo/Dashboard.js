import { useDispatch, useSelector } from "react-redux"
import ParentForm from "./PatientForm"
import { logout } from "../store"

const Dashboard = () => {
    const dispatch = useDispatch()
    const doctor = useSelector(state => state.doctor.Doctor)
    return(
        <h1>
            <div className="Patient_Form">
               <h3> Welcome, Dr.{doctor.username}</h3>
               <button onClick={() => dispatch(logout())}> LogOut</button>
               <ParentForm/>
               <h4> Patient List</h4>
                <table border="1"  style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead style={{ backgroundColor: '#f2f2f2' }}>
                    <tr>
                        <th style={{fontSize:'large'}}>Name</th>
                        <th style={{fontSize:'large'}}>Disease</th>
                        <th style={{fontSize:'large'}}>Fees</th>
                        <th style={{fontSize:'large'}}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {(doctor.patients || []).map((p,i) =>
                        <tr key={i}>
                            <td style={{fontSize:'large'}}>{p.name}</td>
                            <td style={{fontSize:'large'}}>{p.disease}</td>
                            <td style={{fontSize:'large'}}>{p.fees}</td>
                            <td style={{fontSize:'large'}}>{p.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </h1>
    )
}
export default Dashboard