const fs = require('fs');

const log = (str) => {
  fs.appendFileSync('app.log', `${new Date().toString()}: ${str}\n`)
}

module.exports = {
  log
}

