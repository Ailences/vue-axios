// 导入axios
import axios from 'axios'
// 配置baseURL
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token')
  if (token) {
    // config.headers.Authorization = token
    config.headers['Authorization'] = token
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 管理请求
export const login = (username, password) =>
  axios
  .post("/login", {
    username,
    password
  })

export const users = (pagenum, pagesize) => axios
  .get("/users", {
    params: {
      pagenum,
      pagesize
    }
  })
