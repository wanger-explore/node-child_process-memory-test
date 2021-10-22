/**
 * 会出现严重的内存泄漏
 * 
 * - 被调用的子进程：会占用大量内存 (X)
 * - 此进程：会占用内存，内存的增长速度没有上面的快 (X)
 */

var cp = require('child_process');

const robot = cp.exec('node app.js', {
  maxBuffer: 1024 * 1024 * 1024
})

robot.stdout.on('data', (data) => {
  console.log(data);
})