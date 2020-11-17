import { createStore } from "vuex";

import Post from "../apis/Post";
import Category from "../apis/Category";
import User from "../apis/User";

export default createStore({
  state: {
    theme: localStorage.getItem("theme"),
    recentPosts: [],
    post: {},
    categories: {},
    me: {}
  },
  mutations: {
    setTheme: (state, theme) => {
      state.theme = theme;
    },
    SET_RECENT_POSTS: (state, posts) => {
      state.recentPosts = posts;
    },
    SET_POST: (state, post) => {
      state.post = post;
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    SET_USER: (state, user) => {
      state.me = user
    }
  },
  getters: {
    theme: (state) => {
      return state.theme;
    },
    getRecentPosts: (state) => state.recentPosts,
    getPost: (state) => state.post,
    getCategories: (state) => state.categories,
    getToken: (state) => state.me.jwt,
  },
  actions: {
    getRecentPosts: ({ commit }) => {
      Post.recent().then((response) => {
        commit("SET_RECENT_POSTS", response.data);
      });
    },
    getPost: ({ commit }, postId) => {
      Post.show(postId).then((response) => {
        commit("SET_POST", response.data);
      });
    },
    clearPost: ({ commit }) => {
      commit("SET_POST", {});
    },
    getCategories: ({ commit }) => {
      Category.hasPost().then((response) => {
        commit("SET_CATEGORIES", response.data);
      });
    },
    makeLogin: ({ commit }, credentials) => {
      User.login(credentials).then((response) => {
        console.log('FEZ LOGIN', response.data);
        commit("SET_USER", response.data);
      }).catch(err => {
        console.log('ERRO', err);
      });
    }
  },
  modules: {},
});
