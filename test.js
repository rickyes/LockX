const Lock = require('./index');
const lockName = 'test';
console.log(Lock);
let index = 10;
while (index-- > 0) {
  Lock.lock(lockName, function(data) {
    console.log('-lock-', data);
    setTimeout(() => {
      console.log('-unlock-');
      Lock.releaseLock(lockName);
    }, 1000);
  }, {
    index
  });
}
