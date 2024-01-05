import { useEffect } from "react";
import { loggedUsingGoogle } from "../users";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const clientId = "856362789-ohj46sld5c9su5dq06sq5dcv2tlb8d5k.apps.googleusercontent.com";

export default function GLogin({user, setUser}) {
    const navigate = useNavigate();
    
    function handleCredentialResponse(response) {
        const res = jwtDecode(response.credential);
        console.log(res);
        setUser(res);
        console.log(user);
        setTimeout(() => {
            navigate(`/home/${res.email}`);
        }, 1000);
    }
    
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("sign-in-button"),
            { theme: "outline", size: "large" }
        );
        google.accounts.id.prompt();
    }, []);

    useEffect(() => {
        const asyncLogin = async () => {
            if(user.email) {
                loggedUsingGoogle(user);
            }
        }
        asyncLogin();

    }, [user]);

    return (
        <div id="sign-in-button">

        </div>
    );
}