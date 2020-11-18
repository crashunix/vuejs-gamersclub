import Api from './Api';

export default {
    hasPost() {
        return Api.get('categories');
    },
    show(id) {
        return Api.get(`categories/${id}`);
    }
}