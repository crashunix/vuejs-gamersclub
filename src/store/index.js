import { createStore } from 'vuex'

import Post from '../apis/Post';

export default createStore({
  state: {
    theme: localStorage.getItem('theme'),
    posts: [],
    post: {},
  },
  mutations: {
    setTheme: (state, theme) => {
      state.theme = theme;
    },
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    SET_POST: (state, post) => {
      state.post = post;
    }
  },
  getters: {
    theme: state => {
      return state.theme;
    },
    getPosts: state => state.posts,
    getPost: state => state.post,
  },
  actions: {
    getPosts: ({commit}) => {
      Post.all().then(response => {
        commit('SET_POSTS', response.data)
      });
    },
    getPost: ({commit}, postId) => {
      Post.show(postId).then(response => {
        commit('SET_POST', response.data);
      });
    }
  },
  modules: {
  }
})
