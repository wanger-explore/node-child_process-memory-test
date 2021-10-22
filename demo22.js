/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：不会占用大量内存
 */

var cp = require('child_process');

const robot = cp.spawn('node', ['app.js'], {
  cwd: './'
})

// 加了 robot.stdout.on，哪怕打印 1，也会出现严重的内存问题
robot.stdout.on('data', (data) => {
  console.log('1');
})
