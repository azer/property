## property [![Build Status](https://travis-ci.org/azer/property.png)](https://travis-ci.org/azer/property)

Library for creating functional properties

```js
prop = require('property')

PI = prop(3.14)
PI()
// => 3.14

PI(3.14159)
PI()
// => 3.14159
```

## Install

```bash
$ npm install property
```
