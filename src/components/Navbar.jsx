import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Employee List</Link>
            <Link to="/add">Add Employee</Link>
        </nav>
    );
}
