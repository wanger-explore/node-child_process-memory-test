/**
 * 不会出现内存泄漏
 */

var cp = require('child_process');

const robot = cp.spawn('node', ['app.js'], {
  cwd: './'
})

// 加了 robot.stdout.on，不打印日志，不会有内存问题
robot.stdout.on('data', (data) => {
  // console.log(data);
})