/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：会占用大量内存 (X)
 */

var cp = require('child_process');
var { log } = require('./log');

setInterval(() => {

}, 1000)

// const subprocess = cp.exec('node app.js', {
//   maxBuffer: 1024 * 1024 * 1024
// })

log('demo50 pid ===>' + process.pid);


process.on('exit', () => {
  log('demo50 exit ===>');
  // subprocess.kill();
})


process.on('SIGINT', (code) => {
  log('demo50 SIGINT', code);
})

process.on('SIGTERM', () => {
  log('demo50 SIGTERM ===>');
  // subprocess.kill();
  process.exit();
})
