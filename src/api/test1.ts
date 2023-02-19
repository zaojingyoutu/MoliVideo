// api/user.ts


export function list() {
    return Axios({
      url: './abc.json',//连接
      method: 'get',//请求方法
      
    })
  }