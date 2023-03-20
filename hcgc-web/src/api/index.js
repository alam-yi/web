import request from './request.js'

//post请求
const post = (config) => {
  return request({
    ...config,
    method: "post",
    data: config.data
  })
}
//get请求
const get = (config) => {
  return request({
    // url: config.baseURL + config.url,
    ...config,
    method: "get",
    params: config.data
  })
}

export default {
  get,
  post
}