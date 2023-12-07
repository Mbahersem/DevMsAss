import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import { loginUser, loggedUsingGoogle } from "../users";
import GLogin from "../components/google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId = "856362789-ohj46sld5c9su5dq06sq5dcv2tlb8d5k.apps.googleusercontent.com";

export async function action({request}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await loginUser(updates);
    return redirect(`/update/${updates.email}`);
}

export default function Login() {
    // const [loggedIn, setLoggeIn] = useState(false);

    // const onSuccess = (res) => {
    //     console.log("LOGIN SUCCESS ! Current user : ", res.profileObj);
    //     setLoggeIn(true);

    //     useEffect(async () => {
    //         await loggedUsingGoogle(res.profileObj.email);
    //         return redirect(`/update/${res.profileObj.email}`);
    //     }, [loggedIn]);

    // }

    // const onFailure = (res) => {
    //     console.log("LOGIN FAILED ! res : ", res);
    // }

    return(
        <>
            <Form className="login" method="post">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
            <GLogin />
        </>
    );
}