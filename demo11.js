/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：不会占用大量内存
 */

var cp = require('child_process');

const subprocess = cp.spawn('node', ['app.js'], {
  cwd: './',
})

// 加了 subprocess.stdout.on，打印日志，依然会有内存问题
subprocess.stdout.on('data', (data) => {
  console.log(data);
})
