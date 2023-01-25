const API_URL = '/api/users/';

export const login = async (
    email: string,
    password: string
) => {
    const info = {
        email,
        password
    }
    let result;
    await fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        result = data;
    }).catch((err) => result = err);
    return result;
}

export const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    password_confirm: string
) => {
    const info = {
        firstName,
        lastName,
        email,
        password,
        password_confirm
    }
    let result;
    await fetch(API_URL + 'register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        result = data;
    }).catch((err) => result = err);
    return result;
}

export const logout = () => {
    sessionStorage.removeItem('user');
}

export const getCurrentUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);

    return null;
}