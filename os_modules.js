//os modules

const os=require('os')

console.log(os.userInfo())

console.log(os.uptime())

const currentOs={
   name:os.type(),
   release:os.release(),
   totalMem:os.totalmem(),
   freemem:os.freemem()
}
console.log(currentOs)