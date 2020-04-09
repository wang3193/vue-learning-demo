/**
 * 引入vue-router对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 声明插件
 */
Vue.use(VueRouter)

/**
 * 引入需要跳转的page模块
 */
const Home = ()=>import('@/pages/Home');
const Login = ()=>import('@/pages/Login');
const NotFound = ()=>import('@/pages/404');


export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound
        }
    ],
    mode: 'history'
})





