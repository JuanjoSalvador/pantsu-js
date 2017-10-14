const axios = require('axios')
const BASE_URL = 'http://nyaa.pantsu.cat/api/'

const search = (query, limit) => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL + 'search?q=' + query + '&limit=' + limit)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
  })
}

const view = (itemId) => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL + 'view/' + itemId)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
  })
}

module.exports = {
  search,
  view
}
