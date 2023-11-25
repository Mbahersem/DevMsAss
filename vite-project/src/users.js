import axios from 'axios'

export async function loginUser(query) {
    const body = {
        email: query.email,
        password: query.password,
    };
    console.log(body)
    try {
        const res = await axios.post('http://localhost:5000/api/users/login', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(res.data.accessToken) {
            localStorage.setItem('assoc', res.data.accessToken);
        }
    } catch (error) {
        throw new Error(error);
    }

    return null;

}

export async function updateUser(email, updates) {
    const body = {
        name: updates.name,
        password: updates.password,
    };

    try {
        const token = localStorage.getItem('assoc');
        const res = await axios.put(`http://localhost:5000/api/users/${email}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        console.log(res.data);
    } catch (error) {
        throw new Error(error);
    }

    return null;
}

// export async function registerUser(query) {

// }