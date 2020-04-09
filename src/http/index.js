import api from './api'

const install  = Vue =>{
    if(install.installed){
        return;
    }
    install.installed = true;
    //将api挂载到vue的$Api对象中
    Vue.prototype.$api = api;
}

export default install