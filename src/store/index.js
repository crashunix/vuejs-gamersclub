import { createStore } from "vuex";

import Post from "../apis/Post";
import Category from "../apis/Category";

import Auth from "../apis/auth/auth";
import User from "../apis/auth/user";

const userStorage = JSON.parse(localStorage.getItem("user"));

export default createStore({
  state: {
    theme: localStorage.getItem("theme"),
    recentPosts: [],
    post: {},
    categories: [],
    category: {},
    loggedIn: userStorage ? true : false,
    me: null,
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
    SET_CATEGORY: (state, category) => {
      state.category = category;
    },
    loginSuccess(state) {
      state.loggedIn = true;
    },
    loginFailure(state) {
      state.loggedIn = false;
    },
    logout(state) {
      state.loggedIn = false;
    },
    registerSuccess(state) {
      state.loggedIn = false;
    },
    registerFailure(state) {
      state.loggedIn = false;
    },
    SET_ME: (state, user) => {
      state.me = user;
    },
  },
  getters: {
    theme: (state) => {
      return state.theme;
    },
    getRecentPosts: (state) => state.recentPosts,
    getPost: (state) => state.post,
    getCategories: (state) => state.categories,
    getCategory: (state) => state.category,
    getLoggedIn: (state) => state.loggedIn,
    getMe: (state) => state.me,
  },
  actions: {
    getRecentPosts: ({ commit }) => {
      Post.recent().then((response) => {
        commit("SET_RECENT_POSTS", response.data);
      });
    },
    getPost: ({ commit }, postId) => {
      Post.show(postId).then((response) => {
        console.log(response);
        commit("SET_POST", response.data);
      });
    },
    clearPost: ({ commit }) => {
      commit("SET_POST", {});
    },
    clearCategory: ({ commit }) => {
      commit("SET_CATEGORY", {});
    },
    getCategories: ({ commit }) => {
      Category.hasPost().then((response) => {
        commit("SET_CATEGORIES", response.data);
      });
    },
    getCategory: ({ commit }, categoryId) => {
      Category.show(categoryId).then((response) => {
        commit("SET_CATEGORY", response.data);
      });
    },
    login({ commit }, user) {
      return Auth.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          this.$store.dispatch("getMe");
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      Auth.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return Auth.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    getMe({ commit }) {
      return User.getMe().then((response) => {
        commit("SET_ME", response.data);
      });
    },
  },
  modules: {},
});
