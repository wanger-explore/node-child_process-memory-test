/**
 * 不会出现内存泄漏
 */

var cp = require('child_process');

const subprocess = cp.spawn('node', ['app.js'], {
  cwd: './',
  stdio: 'ignore' // 忽略输出流，内存不会增长
})

console.log({
  subprocessPid: subprocess.pid,
  currentProcessPid: process.pid
})