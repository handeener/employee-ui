import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style ={{ padding: '10px', background: "#222", marginBottom: "20px" }}>
            <Link to="/" style={{ color: "#fff", marginRight: '20px' }}>Employee List</Link>
            <Link to="/add" style={{ color: "#fff" }}>Add Employee</Link>
        </nav>
    );
}
