import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createMutual } from "../mutuals";

export async function action({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await createMutual(data);
    return redirect(`/mutuals/${data.name}`)
}

export default function CreateMutual() {
    const [type, setType] = useState("");
    const [helps, setHelps] = useState([]);

    function handleHelps(e) {
        const valeur = e.target.value;
        if(e.target.checked) {
            setHelps([...helps, valeur]);
        } else {
            setHelps(helps.filter(val => val !== valeur));
        }
    }

    return (
        <div className="container-create-mutual">
            <Form className="create-mutual" method="post">
                <h1>Create a mutual</h1>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="input">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} onChange = {(e) => setType(e.target.value)}>
                        <option value="Single">Single</option>
                        <option value="Package">Package</option>
                    </select>
                </div>
                <div className="input">
                    {type === "Single" 
                    ? 
                        <div className="helps">
                            <label htmlFor="helps">Aides</label>
                            <select name="helps" id="helps" value={helps} onChange={e => setHelps([e.target.value])}>
                                <option value="Aide maladie">Aide maladie</option>
                                <option value="Aide décès famille">Aide décès famille</option>
                                <option value="Aide décès membre">Aide décès membre</option>
                            </select>
                        </div>
                    :
                        <div className="helps">
                            <label htmlFor="check1">Aide maladie</label>
                            <input type="checkbox" name="check1" id="check1" value="Aide maladie" checked={helps.includes("Aide maladie")}  onChange={e => handleHelps(e)} />
                            <label htmlFor="check2">Aide décès famille</label>
                            <input type="checkbox" name="check2" id="check2" value="Aide décès famille" />
                            <label htmlFor="check3">Aide décès membre</label>
                            <input type="checkbox" name="check3" id="check3" value="Aide décès membre" />
                        </div>
                    }
                </div>
                <button type="submit">Create mutual</button>
            </Form>
        </div>
    );
}