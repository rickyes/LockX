const Lock = require('./index');


const lockName = 'test';
let index = 10;

while (index-- > 0) {

  Lock.lock(lockName, { index }, async function (data) {

    console.log('\n----lock----', data);
    let result = void (0);

    try {

      result = await doSomeing();
      console.log('result->',result);

    } catch (error) {

      console.error('error->',error);

    } finally {

      console.log('----unlock----\n');
      Lock.unlock(lockName);

    }
  });

}

function doSomeing() {
  return new Promise((resolve, reject) => {

    let time = Math.floor(Math.random() * 10);
    let red = '\033[0;31;1m';
    let normal = '\033[0;38;1m';
    let green = '\033[0;32;1m';

    setTimeout(() => {
      resolve(time < 5 ? `${green}小于5s${normal}` : `${red}大于5s${normal}`);
    }, time * 500);

  });
}
