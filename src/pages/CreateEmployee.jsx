import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../api/employee.js';

export default function CreateEmployee() {

  const navigate  = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    position: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting employee:', employee);
    try {
      const response = await createEmployee(employee);
      console.log('Create employee response:', response);
      alert('Employee created successfully');
      navigate('/');
    } catch (error) {
      console.error('Error creating employee:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
      const errorMsg = error.response?.data?.message || error.response?.data || error.message;
      alert('Error creating employee: ' + JSON.stringify(errorMsg));
    }
  };
   
  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Department:</label>
          <input type="text" name="department" value={employee.department} onChange={handleChange} required />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={employee.position} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={employee.address} onChange={handleChange} required />
        </div>
        <br/>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );  
}