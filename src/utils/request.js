import axios from 'axios';

import {
  Loading
} from 'element-ui';

import {
  Notify
} from 'vant';

import {
  BASE_URL
} from './statusCode';

import store from '@/store';

let loadingInstance = null;

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL, // url = base url + request url
  timeout: 7000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    loadingInstance = Loading.service({
      lock: true
    });
    let token = store.getters.token;
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加相应拦截器
service.interceptors.response.use(
  response => {
    loadingInstance.close();
    const res = response.data;
    // do something ...
    return res;
  },
  error => {
    console.log('err' + error); // for debug
    Notify({
      type: 'danger',
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default service;
