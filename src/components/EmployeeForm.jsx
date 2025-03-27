import React, { useState } from 'react'


function EmployeeForm({onSubmit, existingEmployee}) {

  const [employee, setEmployee] = useState(existingEmployee || {name: "", position: "", department: "" });


  const handlechange = (e) => {
      setEmployee({...employee,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(employee.name.trim()){
      onSubmit(employee);
      setEmployee({name: "", position: "", department: ""});
    }
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Employee Name' value={employee.name} onChange={handlechange} required/>
            <input type="text" name='position' placeholder='Position' value={employee.position} onChange={handlechange} required/>
            <input type="text" name='department' placeholder='Department' value={employee.department} onChange={handlechange} required/>
            <button type='submit' className='b1 btn btn-primary' >{existingEmployee ? "Update Employee" : "Add Employee"}</button>
        </form>
    </>
  )
}

export default EmployeeForm

