/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：不会占用大量内存
 * - 此进程：会占用大量内存 (X)
 * 
 * 缓冲区超过 1G 时，会 crash
 */

var cp = require('child_process');

const subprocess = cp.exec('node app.js', {
  maxBuffer: 1024 * 1024 * 1024
})

console.log({
  subprocessPid: subprocess.pid,
  currentProcessPid: process.pid
})