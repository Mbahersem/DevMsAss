import { Form, redirect, Link } from "react-router-dom";
import { createUser } from "../users";



export async function action({request}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await createUser(updates);
    return redirect(`/`);
}

export default function SignUp() {
    return(
        <div className= "container-signup">
            <Form className="signup" method="post">
                <h1>Sign Up</h1>
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="name" placeholder="Name" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Create</button>
            </Form>
            <div className="signup-alt">
                <p>Already have an account ?
                    <Link to={'/'}> Log in</Link>
                </p>
            </div>
        </div>
    );
}