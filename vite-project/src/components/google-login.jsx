import { GoogleLogin } from 'react-google-login';

const clientId = "856362789-ohj46sld5c9su5dq06sq5dcv2tlb8d5k.apps.googleusercontent.com";

export default function GLogin() {

    return (
        <div id="sign-in-button">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}