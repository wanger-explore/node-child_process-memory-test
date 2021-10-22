/**
 * 不会出现内存泄漏
 */

var cp = require('child_process');

const subprocess = cp.spawn('node', ['app.js'], {
  cwd: './'
})

// 加了 subprocess.stdout.on，不打印日志，不会有内存问题
subprocess.stdout.on('data', (data) => {
  // console.log(data);
})