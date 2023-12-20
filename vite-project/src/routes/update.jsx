import { Form, redirect } from "react-router-dom";
import { updateUser } from "../users";

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateUser(params.email, updates);
    return redirect(`/home/${params.email}`);
}

export default function Update() {
    return (
        <div className="edit-container">
            <Form method="post" className="edit">
                <h1>Edit informations</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <button type="submit">Update</button>
            </Form>
        </div>
    );
}