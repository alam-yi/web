import axios from 'axios';
import { Message } from 'element-ui';

const apiBasePath = process.env.VUE_APP_API_BASE_PATH;
// const { NODE_ENV } = process.env;
console.info(apiBasePath)
const service = axios.create({
  baseURL: apiBasePath,
  headers: {
    IprAuthorization: '',
  },
  timeout: 3 * 1000,
});

// 请求拦截器
service.interceptors.request.use(config => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    config.headers = {
      'Content-Type':'application/json', //配置请求头
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': 'GET'
    }
    //如有需要：注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    //const token = getCookie('名称');//这里取token之前，你肯定需要先拿到token,存一下
    let token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem("token")
    }
    console.info(config);
    return config;
  }, error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(response => {
    // 接收到响应数据并成功后的一些共有的处理，关闭loading等
    const url = response.config.url;
    return response;
  }, error => {
    if (error && error.response) { 
      switch (error.response.status) {
      case 400:
        // error.message = '错误请求'
        Message({
          message: response.data.msg,
          type: 'error',
          duration: 1500,
        });
        break;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        Message.error('服务器响应超时，请刷新当前页')
      }
      Message({
        message: 连接服务器失败,
        type: 'error',
        duration: 1500,
      })
    }
    return Promise.resolve(error.response)
    // if (error?.response?.status === 401) {
    //   setToken(null);
    //   setAuthorized([]);
    //   if (!window.location.href.includes('/login')) {
    //     setBeforePathName();
    //   }

    //   if (NODE_ENV === 'production') {
    //     window.location.reload();
    //   } else {
    //     router.push('/login');
    //   }
    // } else if (error?.response?.status === 403) {
    //   Message({
    //     message: '无权限访问',
    //     type: 'error',
    //     duration: 1500,
    //   });
    // } else {
    //   Message({
    //     message: '服务器出错，请联系系统管理员',
    //     type: 'error',
    //     duration: 1500,
    //   });
    // }
  },
);

export default service;
