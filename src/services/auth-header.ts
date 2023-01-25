export default () => {
    const userStr = sessionStorage.getItem('user');
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);

    if (user && user.token) {
        return { Authorization: user.token };
    } else {
        return { Authorization: '' };
    }
}