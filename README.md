# PantsuJS

A Node.js module for NyaaPantsu API.

```js
const pantsu = require('pantsu-js')

pantsu.search('koe no katachi', 10)
    .then(
        function(data) {
            console.log(data)
            // returns an anime torrent object
        },
        function(err) {
            console.log(err)
        }
    )
```