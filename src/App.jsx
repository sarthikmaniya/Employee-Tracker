import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";


function App() {
  const [employess, setEmployees] = useState([]);


  // add employee
  const addEmployee = (employee) => {
    const newemployee = { id: Date.now(), ...employee};
    setEmployees([...employess, newemployee]);
    console.log("Adding Employee:",newemployee);
  };


  // update employee
  const updateEmployee = (id, updatedEmployee) => {
      setEmployees(employess.map(emp => (emp.id === id ? updatedEmployee : emp)));
  }


  // delete employee
  const deleteEmployee = (id) => {
    setEmployees(employess.filter(emp => emp.id !== id));
  }

  return (
    <>
      <div className="app-container">
          <h1 className="e">Employee Tracker Maniya</h1>
          <EmployeeForm onSubmit={addEmployee}/>
          <EmployeeList employess={employess} onUpdate={updateEmployee} onDelete={deleteEmployee}/>
      </div>
    </>
  )
}

export default App