/**
 * 不会出现内存泄漏
 */

var cp = require('child_process');

const subprocess = cp.spawn('node', ['app.js'], {
  cwd: './',
  detached: true
})

// 启动并关闭该进程后，子进程的内存不会增长。
process.exit();