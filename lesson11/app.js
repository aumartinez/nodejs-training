const fs = require('fs')

fs.appendFile('files/main.html', '<p>Added</p>', (err) => {
  if (err) {
    throw err
  }

  console.log('File updated')
})