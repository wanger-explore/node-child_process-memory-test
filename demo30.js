/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：不会占用大量内存
 * 
 * 但是由于启动子进程时设置了 detached 为 true， 所以这时候关闭此进程时，子进程依然存活。
 * 并且神奇的是，control + c 关闭该进程后，子进程的内存不会增长。
 */

var cp = require('child_process');

const subprocess = cp.spawn('node', ['app.js'], {
  cwd: './',
  detached: true
})

console.log({
  subprocessPid: subprocess.pid,
  currentProcessPid: process.pid
})
