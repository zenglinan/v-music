import axios from './base'

export function getLyric(id) {
  return axios({
    url: '/lyric',
    params: {
      id
    }
  })
}