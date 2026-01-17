import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getEmployees, deleteEmployee} from '../api/employee.js';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees()}, []);

  const fetchEmployees = async () => {
    try {
          const response = await getEmployees();
          const fetched = response.data;
          console.log('fetched employees response:', fetched);
          let list = [];
          if (Array.isArray(fetched)) {
            list = fetched;
          } else if (fetched && Array.isArray(fetched.data)) {
            list = fetched.data;
          } else if (fetched && Array.isArray(fetched.employees)) {
            list = fetched.employees;
          } else {
            // fallback: try to extract an array from object values
            const vals = Object.values(fetched || {}).find(v => Array.isArray(v));
            list = vals || [];
          }
          setEmployees(list);
      } catch (error) {
          console.error('Error fetching employees:', error);
      }  
    }
  
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure to delete this employee?')) return;
    try {
        await deleteEmployee(id);
        setEmployees(prev => prev.filter(emp => emp.id !== id));
    } catch (error) {
        console.error('Error deleting employee:', error);
    } 
  };
  return (
    <>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Phone Number</th>
            <th>Address</th>

          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) && employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.address}</td>
              <td>
                <Link to={`/edit/${employee.id}`}>Edit</Link>
                {" | "}
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ); 
}