# LockX
锁住你的代码片段，缓存等待队列，控制并发

[![NPM](https://nodei.co/npm/lockx.png?compact=true)](https://nodei.co/npm/lockx/)

## install
```
$ npm install lockx --save
```

## dev
```javascipt
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
