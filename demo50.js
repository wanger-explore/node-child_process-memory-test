/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：会占用大量内存 (X)
 */

var cp = require('child_process');
var { log } = require('./log');

const subprocess = cp.exec('node demo50-sub.js', {
  maxBuffer: 1024 * 1024 * 1024
})

log('A pid ===>' + process.pid);

// setTimeout(() => {
//   process.exit();
// }, 3000)

process.on('exit', () => {
  log('A exit, kill B ===>');
  // subprocess.kill();
})


process.on('SIGINT', (code) => {
  log('A SIGINT ===>', code);
  process.exit();
})

process.on('SIGTERM', () => {
  log('A SIGTERM ===>');
  process.exit();
})