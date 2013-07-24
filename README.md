## property [![Build Status](https://travis-ci.org/azer/property.png)](https://travis-ci.org/azer/property)

Minimalistic, extendible property library for JavaScript 

```js
PI = prop(3.14)
PI()
// => 3.14

PI(3.14159)
PI()
// => 3.14159
```

## Install

```bash
$ npm install new-prop # component install adaio/prop
```

## API

### `extend`

```js
foo = prop(3.14)
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

### `getter(Function)`

Sets a getter function for the property.

```js
foo = prop()
  .getter(function(value){
    return value + '.00$'
  })

foo(314)

foo()
// => 314.00$

foo.raw()
// => 314
```

### `setter(Function)`

Sets a setter function for the property.

```js
foo = prop()
  .setter(function(value){
    return value + '.00$'
  })

foo(314)

foo()
// => 314.00$

foo.raw()
// => 314.00$
```

![](https://dl.dropbox.com/s/9q2p5mrqnajys22/npmel.jpg)
