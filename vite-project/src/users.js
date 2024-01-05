import axios from 'axios'

export async function createUser(query) {
    const body = {
        email: query.email,
        name: query.name,
        password: query.password,
    };

    try {
        const res = await axios.post('http://localhost:5001/api/users/registration', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        throw new Error(error);
    }

    return null;
}

export async function getUser(email) {
    const token = localStorage.getItem('assoc');
    try {
        const res = await axios.get(`http://localhost:5001/api/users/${email}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        return res;

    } catch (error) {
        throw new Error(error);
    }
}

export async function getUsers() {
    const token = localStorage.getItem('assoc');
    try {
        const res = await axios.get(`http://localhost:5001/api/users`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res;

    } catch (error) {
        throw new Error(error);
    }
}

export async function loginUser(query) {
    const body = {
        email: query.email,
        password: query.password,
    };

    try {
        const res = await axios.post('http://localhost:5001/api/users/login', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(res.data.accessToken) {
            localStorage.setItem('assoc', res.data.accessToken);
            localStorage.setItem('user', query.email);
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
        const res = await axios.put(`http://localhost:5001/api/users/edit/${email}`, body, {
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

export async function loggedUsingGoogle(user) {
    const body = {
        email: user.email,
        name: user.name,
        picture: user.picture,
    };
    console.log(body)

    try {
        const res = await axios.post("http://localhost:5001/api/users/google-login", body, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(res.data.accessToken) {
            localStorage.setItem('assoc', res.data.accessToken);
        }
    } catch (error) {
        throw new Error(error);
    }
}