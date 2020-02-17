import axios from 'axios'

// const baseURL = process.env.NODE_ENV === 'development'
//                 ? 'http://localhost:3000'
//                 : 'http://49.233.137.79:3000'

const baseURL = 'http://49.233.137.79:4000'

export default axios.create({
  baseURL
})
