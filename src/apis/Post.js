import Api from './Api';

export default {
    all() {
        return Api.get('posts');
    },
    recent() {
        return Api.get('posts?_limit=6&_sort=published_at:DESC');
    },
    show(id) {
        return Api.get(`posts/${id}`);
    }
}