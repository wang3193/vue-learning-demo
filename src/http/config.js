import {baseUrl} from '@/util/global'

export default {
    method: 'get',
    baseUrl: baseUrl,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data : {

    },
    //超时时间
    timeout: 10000,
    //是否携带凭证
    withCredentials: true,
    //返回数据类型
    responseType: 'json'

}

