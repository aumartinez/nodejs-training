const fs = require('fs')

console.log('Before read')
fs.readFile('files/index.html', 'utf-8', (err, ctx) => {
  if (err) {
    throw err
  } 
  
  console.log(ctx)
})
console.log('After read')

console.log('Before rename')
fs.rename('files/index.html', 'files/main.html', (err)=> {
  if (err) {
    throw err
  }

  console.log('Name changed')
})
console.log('After rename')

console.log('Before update')
fs.appendFile('files/main.html', '<p>Added</p>', (err) => {
  if (err) {
    throw err
  }

  console.log('File updated')
})
console.log('After update')

console.log('Before delete')
fs.unlink('files/trash.html', (err) => {
  if (err) {
    throw err
  }
  console.log('File was removed')
})
console.log('After delete')