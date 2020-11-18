import Api from '../Api';

export default {
    login(user) {
        return Api.post('auth/local', {
                identifier: user.identifier,
                password: user.password
            })
            .then(response => {
                if (response.data.jwt) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    },
    logout() {
        localStorage.removeItem('user');
    },

    register(user) {
        return Api.post('auth/local/register', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}