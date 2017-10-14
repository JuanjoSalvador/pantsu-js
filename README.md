# Pantsu.js

A Node.js module for NyaaPantsu API.

Complete [list of available parameters here](https://nyaa.pantsu.cat/apidoc/).

```js
const pantsu = require('pantsu-js')

query = {
    'q': "koe no katachi",
    'page': 1,
    'limit': 50,
    'c': [3,13],
    'lang': ['en']
}

pantsu.search(query)
    .then(
        function(data) {
            console.log(data)
            /*{ torrents: 
                [ 
                    { 
                        id: 984615,
                        name: '[Inoreen] Koe no Katachi Movie German Subtitle',
                        status: 1,
                        hash: 'C84625A002D4B463B8DBB4BB1AE1E34E521F291A',
                        date: '2017-09-20T02:11:55Z',
                        filesize: 138126,
                        description: '',
                        comments: [],
                        sub_category: '13',
                        category: '3',
                        ...
                    }
                ]
            }*/
        },
        function(err) {
            console.log(err)
        }
    )
```