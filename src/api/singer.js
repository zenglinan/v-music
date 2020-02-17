import axios from './base.js'

export function getHotSingers(limit){
  let curOffset = getHotSingers.offset  // 请求数据偏移值
  getHotSingers.offset += limit
  return axios({
    url: '/top/artists',
    params: {
      limit,
      offset: curOffset
    }
  })
}
getHotSingers.offset = 0

export function getSingerDetail(id){
  return axios({
    url: '/artists',
    params: {
      id
    }
  })
}
