// api/user.ts
import {Axios} from '@/utils/axios'
const base = ''

export function list() {
    return Axios({
      url: './abc.json',//连接
      method: 'get',//请求方法
      
    })
  }