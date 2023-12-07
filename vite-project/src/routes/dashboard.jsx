import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const navigate = useNavigate();
    
    function handleLogOut() {
        localStorage.removeItem('assoc');
        navigate('/');
    }

    return (
        <div className="dashboard">
            <button className="logout" onClick={handleLogOut}>Sign out</button>
        </div>
    );
}