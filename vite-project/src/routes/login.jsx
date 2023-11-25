import { Form, redirect } from "react-router-dom";
import { loginUser } from "../users";

export async function action({request}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await loginUser(updates);
    return redirect(`/update/${updates.email}`);
}

export default function Login() {
    return(
        <Form className="login" method="post">
            <input type="email" name="email" />
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </Form>
    );
}