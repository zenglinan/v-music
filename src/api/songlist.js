import axios from './base'

export function getSonglistDetail(id) {
  return axios({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
