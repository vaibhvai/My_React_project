import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPatient } from '../store'

const PatientForm = () => {
  const [form, setForm] = useState({ name: '', address: '', fees: '', disease: '', date: '' })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPatient(form))
    setForm({ name: '', address: '', fees: '', disease: '', date: '' })
  }

  return (
    <form className='authform_p' onSubmit={handleSubmit}>
      <p style={{fontSize:'medium'}}>Patient Registration Form</p>
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required />
      <input placeholder="Fees" type="number" value={form.fees} onChange={e => setForm({ ...form, fees: e.target.value })} required />
      <input placeholder="Disease" value={form.disease} onChange={e => setForm({ ...form, disease: e.target.value })} required />
      <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
      <button type="submit">Add Patient</button>
    </form>
  )
}

export default PatientForm;
