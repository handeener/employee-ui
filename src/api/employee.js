import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/employees';   

export const getEmployees = async () => {
    return await axios.get(API_BASE_URL + '/getAll');
}

export const getEmployeeById = async (id) => {
    return await axios.get(`${API_BASE_URL}/${id}`);
}   

export const addEmployee = async (employee) => {
    return await axios.post(API_BASE_URL + '/create', employee);
}

export const updateEmployee = async (id, employee) => {
    return await axios.put(`${API_BASE_URL}/${id}`, employee);
}   

export const deleteEmployee = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
}   

 