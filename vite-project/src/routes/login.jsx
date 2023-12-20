import { Form, redirect, Link } from "react-router-dom";
import { loginUser } from "../users";
import GLogin from "../components/google-login";
import { useState } from "react";

export async function action({request}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await loginUser(updates);
    return redirect(`/home/${updates.email}`);
}

export default function Login() {
    const [user, setUser] = useState({});

    return(
        <div className= "container-login">
            <Form className="login" method="post">
                <h1>Login</h1>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <button type="submit">Login</button>
            </Form>
            <p>OR</p>
            <GLogin user={user} setUser={setUser} />
            <p>New here ? 
                <Link to={'/signup'}> Sign up</Link>
            </p>
        </div>
    );
}