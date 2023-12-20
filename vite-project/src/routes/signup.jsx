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
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
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