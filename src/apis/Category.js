import Api from './Api';

export default {
    hasPost() {
        return Api.get('categories?posts_contains=3');
    },
    show(id) {
        return Api.get(`categories/${id}`);
    }
}