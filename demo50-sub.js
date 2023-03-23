/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：会占用大量内存 (X)
 */

var cp = require('child_process');
var { log } = require('./log');

const subprocess = cp.exec('node app.js', {
  maxBuffer: 1024 * 1024 * 1024
})

log('B pid ===>' + process.pid);
log('C pid ===>' + subprocess.pid);


process.on('exit', () => {
  log('B exit ===>');
  // subprocess.kill();
})


process.on('SIGINT', (code) => {
  log('B SIGINT ===>', code);
  process.exit();
})

process.on('SIGTERM', () => {
  log('B SIGTERM ===>');
  process.exit();
})
