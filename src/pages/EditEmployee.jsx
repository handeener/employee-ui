import {useParams} from 'react-router-dom';

export default function EditEmployee() {
    const { id } = useParams(); 
    return <h2>Edit Employee {id}</h2>;
}