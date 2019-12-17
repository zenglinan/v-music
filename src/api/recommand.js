import axios from './base'

export function getBanners(type) {
  return axios({
    method: 'get',
    url: '/banner',
    params: {
      type
    }
  })
}

export function getHotSongList(limit){
  let curOffset = getHotSongList.offset // 这次请求的偏移值
  getHotSongList.offset += limit
  return axios({
    method: 'get',
    url: 'top/playlist',
    params: {
      limit,
      offset: curOffset,
      order: 'hot'
    }
  })
}
getHotSongList.offset = 0