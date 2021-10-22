/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：会占用大量内存 (X)
 */

var cp = require('child_process');
var { log } = require('./log');

const subprocess = cp.exec('node demo50.js', {
  maxBuffer: 1024 * 1024 * 1024
})

log('demo51 pid ===>' + process.pid);

setTimeout(() => {
  process.exit();
  // subprocess.kill();
}, 3000)

process.on('exit', () => {
  log('demo51 exit ===>');
  subprocess.kill();
})


process.on('SIGINT', (code) => {
  log('demo51 SIGINT', code);
})

// process.on('SIGTERM', () => {
//   log('demo51 SIGTERM ===>');
//   subprocess.kill();
// })