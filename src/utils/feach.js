import axios from 'axios'
import qs from 'qs';

let baseURL = '';

if(process.env.NODE_ENV == 'development'){
    baseURL = 'http://myweibo.37bigboom.cn';
}else{
    baseURL = 'http://myweibo.37bigboom.cn/api';
}


const service = axios.create({
    baseURL: baseURL, // api的base_url
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
        data = qs.stringify(data);
        return data;
    }],
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;
