import axios from "axios";

const myAxios = axios.create({
    baseURL: 'http://47.115.163.154:8080',
    // baseURL: 'http://localhost:8080',
    timeout: 30000,
    withCredentials: true
});

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 沒有登录则跳转到登录页面
    if(response?.data?.code === 40100) {
        window.location.href = '/login'
    }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios
