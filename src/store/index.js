import Vue from 'vue';
import Vuex from 'vuex';
import {
  SUCCESS_CODE
} from '@/utils/statusCode';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    active: 0,
    isReplace: false,
    mob: ''
  },
  mutations: {
    SET_MOB: (state, value) => {
      sessionStorage.setItem('Mob', value);
      state.mob = value;
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
    // 设置 active
    setActive({
      commit
    }, routeName, fromRouteName) {
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
  modules: {}
});
