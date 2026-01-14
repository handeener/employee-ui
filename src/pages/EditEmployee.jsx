import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect, use} from 'react';
import { getEmployeeById, updateEmployee } from '../api/employee.js';


export default function EditEmployee() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        position: '',
        phoneNumber: '',
        address: ''
    });

    useEffect (() => {
        fetchEmployee();
    }, [id, navigate]);

    const fetchEmployee = async () => {
        try {
            const response = await getEmployeeById(id);
            const fetched = response.data.data;
            console.log('fetched employee response:', fetched);
            setEmployee(fetched || {});
        } catch (error) {
            console.error('Error fetching employee:', error);
            navigate('/');
        } 
        finally {
            setLoading(false);
        }  
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting updated employee:', employee);
        try {
            const response = await updateEmployee(id, employee);
            console.log('Update employee response:', response);
            alert('Employee updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating employee:', error);
            alert('Error updating employee: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            {loading ? <p>Loading...</p> : (
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
                    <input type="text" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} required maxLength={11} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={employee.address} onChange={handleChange} required maxLength={50} />
                </div>
                <br/>
                <button type="submit">Update Employee</button>
            </form>
            )}
        </div>
    )
}