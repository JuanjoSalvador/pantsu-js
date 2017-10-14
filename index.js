const axios = require('axios')
const BASE_URL = 'http://nyaa.pantsu.cat/api/'

const _queryBuilder = function(obj) {
    query = ""

    keys = Object.keys(obj)

    for (var i = 0; i < keys.length; i++) {

      key = keys[i]

      if (i != 0) {
        if (key == 'c') {
          query = query + `&c=${obj['c'].join("_")}`
        } else if (key == "lang") {
          obj["lang"].forEach(function(l) {
            query = query + `&lang=${l}`
          })
        } else {
          query = query + `&${key}=${obj[key]}`
        }

      } else {

        query = query + `${key}=${obj[key]}`

      }
    }

    console.log(query)

    return query
}

const search = (queryObj) => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL + 'search?' + _queryBuilder(queryObj))
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
