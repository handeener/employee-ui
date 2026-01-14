import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import EmployeeList from './pages/EmployeeList.jsx';
import CreateEmployee from './pages/CreateEmployee.jsx';
import EditEmployee from './pages/EditEmployee.jsx';

function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/add' element={<CreateEmployee />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>      
    </div>
    </>
  )
}

export default App
