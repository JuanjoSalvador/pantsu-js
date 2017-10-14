const axios = require('axios')
const utils = require('utils/utils.js')

const BASE_URL = 'http://nyaa.pantsu.cat/api/'

const search = (queryObj) => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL + 'search?' + utils.queryBuilder(queryObj))
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
