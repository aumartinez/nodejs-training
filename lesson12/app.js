const fs = require('fs')

fs.writeFile('files/test.html', 'Content overwritten', (err) => {
  if (err) {
    throw err
  }

  console.log('Content was overwritten')
})