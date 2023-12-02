import { GoogleLogout } from "react-google-login";

const clientId = "856362789-ohj46sld5c9su5dq06sq5dcv2tlb8d5k.apps.googleusercontent.com";

export default function GLogout() {

    const onSuccess = () => {
        console.log("Log out successful !");
    }

    return(
        <div id="sign-out-button">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}