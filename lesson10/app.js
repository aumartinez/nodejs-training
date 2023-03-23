const fs = require('fs')

fs.rename('files/index.html', 'files/main.html', (err)=> {
  if (err) {
    throw err
  }

  console.log('Name changed')
})