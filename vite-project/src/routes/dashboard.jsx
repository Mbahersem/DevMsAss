import { useLoaderData, useNavigate } from "react-router-dom";
import ImageComponent from "../components/image";
import { getUser } from "../users";

export async function loader({params}) {
    const user = await getUser(params.email);
    console.log(user);
    const data = await user.data;
    console.log(data);
    return { data };
}

export default function Dashboard() {
    const navigate = useNavigate();
    const userUsed = useLoaderData();
    console.log(userUsed);
    
    function handleLogOut() {
        localStorage.removeItem('assoc');
        navigate('/');
    }

    function handleEdit() {
        if(userUsed.data.email) {
            navigate(`/update/${userUsed.data.email}`);
        }
    }

    function handleCreateMutual() {
        navigate('/mutuals/create');
    }


    return (
        <div className="dashboard">
            <div className="infos">
                <ImageComponent user = {userUsed.data} id="profile" />
                <h3>{userUsed ? userUsed.data.name : ""}</h3>
                <p>{userUsed ? userUsed.data.email : ""}</p>
            </div>
            <button className="logout" onClick={handleLogOut}>Sign out</button>
            <button onClick={handleEdit}>Edit infos</button>
            <button onClick={handleCreateMutual}>Create mutual</button>
        </div>
    );
}