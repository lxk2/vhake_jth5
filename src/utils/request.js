import axios from 'axios';
import qs from 'qs';

import {
  Loading
} from 'element-ui';

import {
  Notify
} from 'vant';

import {
  BASE_URL
} from './statusCode';

let loadingInstance = null;

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL, // url = base url + request url
  timeout: 7000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    loadingInstance = Loading.service({
      lock: true
    });
    // let token = store.getters.token;
    // if (token) {
    //   config.headers['X-Token'] = token;
    // }
    if (config.data) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    // do something with request error
    // eslint-disable-next-line
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
    loadingInstance.close();
    // eslint-disable-next-line
    console.log('err' + error); // for debug
    Notify({
      type: 'danger',
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default service;
