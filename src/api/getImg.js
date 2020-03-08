import axios from 'axios'

function getImg(arr) {
  return Promise.all(arr.map(url => {
    axios.get(url)
  }))
}

export default getImg
