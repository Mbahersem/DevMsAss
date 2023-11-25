import { Form, redirect } from "react-router-dom";
import { updateUser } from "../users";

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateUser(params.email, updates);
    return redirect(`/`);
}

export default function Update() {
    return (
        <Form method="post">
            <input type="text" name="name" placeholder="Name" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Update</button>
        </Form>
    );
}