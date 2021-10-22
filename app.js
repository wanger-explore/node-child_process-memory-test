const http = require('http');
var { log } = require('./log');

let flag = true;

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  const used = process.memoryUsage();
  const data = {};
  for (let key in used) {
    data[key] = `${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`
  }
  res.end(JSON.stringify({
    data,
    pid: process.pid,
    flag
  }))
}).listen(8889)


// setTimeout(() => {
//   // TODO
//   flag = false;
// }, 10000)

setInterval(() => {
  if (flag) {
    for (let x = 0; x < 1000; x++) {
      console.log(
        `Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. For more information on using Node.js, see the Node.js Website.

        The Node.js project uses an open governance model. The OpenJS Foundation provides support for the project.

        This project is bound by a Code of Conduct.`
      );
    }
  }
}, 10);