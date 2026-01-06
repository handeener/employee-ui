import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import EmployeeList from './pages/EmployeeList.jsx';
import AddEmployee from './pages/AddEmployee.jsx';
import EditEmployee from './pages/EditEmployee.jsx';

function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>      
    </div>
    </>
  )
}

export default App
