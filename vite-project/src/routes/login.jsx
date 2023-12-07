import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../users";
import GLogin from "../components/google-login";


export async function action({request}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await loginUser(updates);
    return redirect(`/home`);
}

export default function Login() {
    const [user, setUser] = useState({});

    return(
        <>
            <Form className="login" method="post">
                <h1>Login</h1>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
            <GLogin user = {user} setUser = {setUser} />
        </>
    );
}