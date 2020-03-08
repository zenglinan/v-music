import axios from 'axios'

function getImg(arr) {
  return Promise.all(arr.map(url => {
    return axios.get(url)
  }))
}

export default getImg
