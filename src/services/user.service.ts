import authHeader from "./auth-header";

const API_URL = '/api/users/';

export const getPublicContent = () => {
    return fetch(API_URL + 'all', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response: any) => {
        return response.json();
    });
}

export const getUserBoard = () => {
    return fetch(API_URL + 'me', {
        method: 'get',
        headers: authHeader()
    })
    .then((response: any) => {
        return response.json();
    });
}

export const getModeratorBoard = () => {
    return fetch(API_URL + 'mod', {
        method: 'get',
        headers: authHeader()
    })
    .then((response: any) => {
        return response.json();
    });
}

export const getAdminBoard = () => {
    return fetch(API_URL + 'admin', {
        method: 'get',
        headers: authHeader()
    })
    .then((response: any) => {
        return response.json();
    });
}


export const changePassword = (
    email: string,
    current_password: string,
    password: string,
    password_confirm: string,
) => {
    const info = {
        email,
        current_password,
        password,
        password_confirm
    }
    console.log(info)
    return fetch(API_URL + 'change-password', {
        method: 'POST',
        headers: {
            ...authHeader(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then((response: any) => {
        return response.json();
    });
}