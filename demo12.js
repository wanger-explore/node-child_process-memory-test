/**
 * 不会出现内存泄漏
 * 
 * - 被调用的子进程：有轻微的内存泄漏
 * - 此进程：不会占用大量内存
 */

var cp = require('child_process');

const subprocess = cp.spawn('node', ['app.js'], {
  cwd: './'
})

// 加了 subprocess.stdout.on，不打印日志，不会有内存问题
subprocess.stdout.on('data', (data) => {
  // console.log(data);
})

console.log({
  subprocessPid: subprocess.pid,
  currentProcessPid: process.pid
})