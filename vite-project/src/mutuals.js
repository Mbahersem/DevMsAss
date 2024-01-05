import axios from 'axios';

export async function createMutual(query) {
    const token = localStorage.getItem('assoc');
    const email = localStorage.getItem('user');
    const body = {
        name: query.name,
        type: query.type,
        helps: query.helps,
        emailUser: email,
    };

    console.log(body);

    try {
        const res = await axios.post(`http://localhost:5002/api/mutuals/creation`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            },
        });
        return res;

    } catch (error) {
        throw new Error(error);
    }

}