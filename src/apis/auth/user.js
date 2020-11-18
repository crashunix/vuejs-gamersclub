import Api from '../Api';
import authHeader from './auth-header';

export default {
  getMe() {
    return Api.get('users/me', { headers: authHeader() });
  },
  getPublicContent() {
    return Api.get('all');
  },

  getUserBoard() {
    return Api.get('user', { headers: authHeader() });
  },

  getModeratorBoard() {
    return Api.get('mod', { headers: authHeader() });
  },

  getAdminBoard() {
    return Api.get('admin', { headers: authHeader() });
  }
}