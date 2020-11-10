import axios from "axios";
// import router from '../../router/index'
// import baseUrls from './url.config'
// import store from '../store'
// import { BASE_API } from '../config/env'

// 创建axios实例

const service = axios.create({
  //baseURL: baseUrls.ybapi,           // api的base_url
  timeout: 60000, // 请求超时时间
  transformRequest: [
    function(data) {
      // Do whatever you want to transform the data
      let ret = "";
      for (let it in data) {
        ret +=
          encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret;
    }
  ],
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (config.url.indexOf("ips_api") == -1) {
      config.headers.token = window.localStorage["yb_token"];
    }

    //debugger
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
