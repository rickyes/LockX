# LockX
锁住代码片段，缓存等待队列，控制并发

[![Build Status](https://travis-ci.org/zhoumingque/LockX.svg?branch=master)](https://travis-ci.org/zhoumingque/LockX)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/lockx)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.npmjs.com/package/lockx)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fzhoumingque%2FLockX.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fzhoumingque%2FLockX?ref=badge_shield)

## Install
[![NPM](https://nodei.co/npm/lockx.png?compact=true)](https://nodei.co/npm/lockx/)
```
$ npm install lockx --save
```

## Dev
```javascript
const Lock = require('lockx');
const lockName = 'test';
let index = 10;
while (index-- > 0) {
  // 加锁
  Lock.lock(lockName, function(data) {
    console.log('lock', data);
    setTimeout(() => {
      console.log('unlock');
      // 解锁
      Lock.releaseLock(lockName);
    }, 1000);
  }, {
    index
  });
}
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fzhoumingque%2FLockX.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fzhoumingque%2FLockX?ref=badge_large)
