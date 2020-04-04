import axios from 'axios';
import config from './config';
import Cookies from 'js-cookie';
import router from '@/router';

export default function $axios(options) {
    return new Promise((resolve, response) => {
        const instance = axios.create({
            baseUrl: config.baseUrl,
            headers: config.headers,
            timeout: config.timeout,
            withCredentials: config.withCredentials
        })

        //request请求拦截器
        instance.interceptors.request.use (
            config => {
                let token = Cookies.get('token');
                if(token) {
                    config.headers.token = token;
                }else {
                    router.push('/login');
                }
                return config;
            },
            error => {
                const errorInfo = error.response;
                if(errorInfo) {
                    error = errorInfo.data;
                    const errorStatus = errorInfo.status;
                    router.push({
                        path:'/error/${errorStatus}'
                    })
                }
                return Promise.reject(error);
            }
        )

        instance.interceptors.response.use (
            response => {
                return response.data;
            },
            err => {
                if (err && err.response) {
                    switch (err.response.status) {
                        case 400:
                            err.message = '请求错误'
                            break;
                        case 404:
                            break;
                        case 500:
                            break;
                        default:
                    } 
                }
                return Promise.reject(err);
            }
        )

        instance(options).then(res => {
            resolve(res);
            return false;
        }).catch (error => {
            reject(error);
        })
    })
}

