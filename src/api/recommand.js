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
  return axios({
    method: 'get',
    url: 'top/playlist',
    params: {
      limit,
      order: 'hot'
    }
  })
}