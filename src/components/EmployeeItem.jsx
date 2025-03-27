import React from 'react'

function EmployeeItem({ employee, onEdit, onDelete }) {
  return (
    <>
        <div className='employee-item'>
            <h3>{employee.name}</h3>
            <p><strong>Position: </strong>{employee.position}</p>
            <p><strong>Department: </strong>{employee.department}</p>
            <button className='btn1 btn btn-dark' onClick={onEdit}>Edit</button>
            <button className='btn1 btn btn-danger' onClick={onDelete}>Delete</button>
        </div>
    </>
  )
}

export default EmployeeItem
