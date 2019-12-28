import axios from './base'
import rawAxios from 'axios'

export function getHotSearch() {
  return axios({
    url: '/search/hot',
    params: {
      limit: 10
    }
  })
}

export function getSuggest(keyword) {
  function searchKeyword() {
    return axios({
      url: '/search/suggest',
      params: {
        keywords: keyword,
      }
    })
  }

  function searchMore(){
    return axios({
      url: '/search',
      params: {
        keywords: keyword,
        limit: 15
      }
    })
  }

  return rawAxios.all([searchKeyword(), searchMore()])
}