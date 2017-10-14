const pantsu = require('./index.js')

query = {
    'q': "koe no katachi",
    'page': 1,
    'limit': 1,
    'c': [3,6],
    'lang': ['es']
}

pantsu.search(query)
.then(
    function(data) {
        console.log(data)
        // returns an anime torrent object
    },
    function(err) {
        console.log(err)
    }
)