/**
  * article模块接口列表
  */

import axios from '@/utils/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

let api = '/api/chejiang'
const article = {
  // 新闻列表
  articleList () {
    return axios.get(api + '/user/checkShop')
  },
  // 新闻详情,演示
  // articleDetail (id, params) {
  //   return axios.get(`${base.sq}/topic/${id}`, {
  //     params: params
  //   })
  // },
  // post提交
  login (params) {
    return axios.post(api + '/user/login', qs.stringify(params))
  }
  // 其他接口…………
}

export default article
