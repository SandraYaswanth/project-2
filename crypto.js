const crypto=require ('crypto');
const hash=crypto.createHash('sha256');
hash.update('yaswanth203');
console.log(hash.digest('hex'));