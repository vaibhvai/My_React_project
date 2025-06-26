const { createSlice, configureStore } = require("@reduxjs/toolkit");

const doctorSlice = createSlice({
    name:'Doctor',
    initialState : {
        isAuthenticated : false,
        Doctor : null,
        patients : []
    },
    reducers : {
        signup(state, action) {
            const doctors = JSON.parse(localStorage.getItem('doctors')) || []
            const existing = doctors.find(doc => doc.username === action.payload.username)
            if(!existing) {
                doctors.push(action.payload)
                localStorage.setItem('doctors', JSON.stringify(doctors))
                state.Doctor = action.payload
                state.isAuthenticated = true
            }
        },
        login(state, action) {
             const doctors = JSON.parse(localStorage.getItem('doctors')) || []
             const found = doctors.find(doc => doc.username === action.payload.username && doc.password === action.payload.password)
             if (found) {
                state.Doctor = found
                state.isAuthenticated = true
             }
        },
        addPatient(state, action) {
            const updateDoctors = {
                ...state.Doctor,
                patients : [...(state.Doctor.patients || []), action.payload] 
            }
            state.Doctor = updateDoctors
            const doctors = JSON.parse(localStorage.getItem('doctors')).map(doc=> doc.username === updateDoctors.username ? updateDoctors : doc)
            localStorage.setItem('doctors', JSON.stringify(doctors))
        },
        logout(state, action) {
            state.isAuthenticated = false
            state.Doctor = null
        }
    }
})
 export const {signup, login, addPatient, logout} = doctorSlice.actions

 const store = configureStore({
    reducer : {
        doctor : doctorSlice.reducer
    }
 })
 export default store