const fs = require('fs')

fs.readFile('files/index.html', 'utf-8', (err, ctx) => {
  if (err) {
    throw err
  } 
  
  console.log(ctx)
})