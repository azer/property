```js
var prop = require('prop')

var PI = prop(3.14)

PI()
// => 3.14

PI(3.14159)
PI()
// => 3.14159
```

### Install

```bash
$ npm install ada-prop # component install adaio/prop
```

## API

### #extend

```js
var foo = prop(3.14)
  .extend(function(raw){

    return function(newValue){
      if(newValue){
        newValue*=10
        return raw(newValue)
      }

      return raw()
    }

  })

```

![](https://dl.dropbox.com/s/9q2p5mrqnajys22/npmel.jpg?token_hash=AAHqttN9DiGl63ma8KRw-G0cdalaiMzrvrOPGnOfDslDjw)
