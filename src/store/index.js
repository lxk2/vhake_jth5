import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { login, getInfo, logOut } from '@/api/user';
import { SUCCESS_CODE } from '@/utils/statusCode';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken(),
    userInfo: {},
    active: 0,
    isReplace: false
  },
  mutations: {
    SET_TOKEN: (state, value) => {
      state.token = value;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_ACTIVE: (state, index) => {
      state.active = index;
    },
    SET_IS_REPLACE: (state, value) => {
      state.isReplace = value;
    }
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password })
          .then(response => {
            const { data } = response;
            commit('SET_TOKEN', data.token);
            setToken(data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // get user info
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const { data, msg } = response;
            if (!data) {
              reject(msg);
            }
            commit('SET_USERINFO', data);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // user log out
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        logOut()
          .then(response => {
            const { code, msg } = response;
            if (code === SUCCESS_CODE) {
              removeToken();
              commit('SET_TOKEN', '');
              resolve(msg);
            } else {
              reject(msg);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // 设置 active
    setActive({ commit }, routeName, fromRouteName) {
      let index = 0;
      switch (routeName) {
        case 'index':
          index = 0;
          break;
        case 'user':
          index = 1;
          break;
        default:
          index = -1;
          break;
      }
      if (routeName === fromRouteName) {
        commit('SET_IS_REPLACE', true);
      } else {
        commit('SET_IS_REPLACE', false);
      }
      let time = setTimeout(() => {
        commit('SET_ACTIVE', index);
        clearTimeout(time);
      });
    }
  },
  modules: {
  },
  getters: {
    token: () => getToken()
  }
});
