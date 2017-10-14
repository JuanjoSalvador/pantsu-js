const queryBuilder = function(obj) {
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

module.export = {
    queryBuilder
}