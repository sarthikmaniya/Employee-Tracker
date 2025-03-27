import React, { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeeForm from "./EmployeeForm";
import { Collapse } from "bootstrap";

function EmployeeList({ employess, onUpdate, onDelete }) {

  const [editingEmployee, setEditingEmployee] = useState(null);

  return (
    <>
      <div>
        <h2 className="el1">Employee List</h2>
        {employess.length === 0 ? (
          <p>No employees added yet.</p>
        ) : (
            employess.map((employee) => (
              <div key={employee.id}>
              {editingEmployee === employee.id ? (
                <EmployeeForm
                  existingEmployee={employee}
                  onSubmit={(updatedEmployee) => {
                      onUpdate(employee.id, {...updatedEmployee, id: employee.id});
                      console.log("Updating Employee:",updatedEmployee);
                      setEditingEmployee(null);
                  }}
                />
              ) : (
                <EmployeeItem employee={employee} onEdit={() => setEditingEmployee(employee.id)} onDelete={() => onDelete(employee.id)}/>
              )}
              </div>
            ))
        )}
      </div>
    </>
  );
}

export default EmployeeList;

