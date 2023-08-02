const API_BASE_URL = 'https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io';

async function fetchAPI(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    if (method === 'DELETE') {
        return null;
    }

    return response.json();
}

export async function get(endpoint) {
    return fetchAPI(`/${endpoint}`);
}

export async function post({ endpoint, body }) {
    return fetchAPI(`/${endpoint}`, 'POST', body);
}

export async function put({ endpoint, body }) {
    return fetchAPI(`/${endpoint}`, 'PUT', body);
}

export async function delete_fun({ endpoint }) {
    return fetchAPI(`/${endpoint}`, 'DELETE');
}
