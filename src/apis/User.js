import Api from './Api';

export default {
    login(credentials) {
        console.log(credentials);
        return Api.post('auth/local', {identifier: credentials.identifier, password: credentials.password});
    },
}