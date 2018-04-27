# <%= projectName %>

> <%= description %>

## Introduction

<!--  -->

## Usage

### ES6

```javascript
import LS from './src/localstorage';
```

### UMD

```javascript
use ./dist/localstorage.js
```

***

#### set(key, value, cover)

```javascript
存储数据，返回 set 的对象
* set(key, value, cover = false)
* @params key
* @params value
* @params cover 是否覆盖
* return {
    key: key,
    val: value
}

Example:

LS.set('name', 'realign');

return
{
    key: 'name',
    val: 'realign'
}
```