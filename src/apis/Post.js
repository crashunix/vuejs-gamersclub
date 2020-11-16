import Api from './Api';

export default {
    all() {
        return Api.get('posts');
    },
    show(id) {
        return Api.get(`posts/${id}`);
    }
}