import axios from './base'

export function getSongDetail(idArr) {
  const ids = idArr.join(',')
  return axios({
    url: 'song/detail',
    params: {
      ids: ids
    }
  })
}