import { useEffect } from "react";
import { loggedUsingGoogle } from "../users";

const clientId = "856362789-ohj46sld5c9su5dq06sq5dcv2tlb8d5k.apps.googleusercontent.com";

export default function GLogin() {
    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token" + response.credential);
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
    })
    return (
        <div id="sign-in-button">

        </div>
    );
}