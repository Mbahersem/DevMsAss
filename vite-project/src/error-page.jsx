import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error">
            <h1>Oops</h1>
            <p>So sorry...</p>
        </div>
    );
}