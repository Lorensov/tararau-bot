const axios = require('axios')

global.axios = axios
axios.defaults.baseURL = 'https://tararau-bot.herokuapp.com'

// const config = {
//   baseURL: 'https://tararau-bot.herokuapp.com'
//   header: {
//     Authorization: process.env.AUTH_TOKEN,
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }
