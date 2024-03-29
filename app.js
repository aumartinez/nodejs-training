const fs = require('fs')

console.log('Before read')
const file = fs.readFileSync('files/index.html', 'utf-8')
console.log('After read')

console.log(file)

console.log('Before rename')
fs.renameSync('files/index.html', 'files/main.html', (err)=> {
  if (err) {
    throw err
  }

  console.log('Name changed')
})
console.log('After rename')

console.log('Before update')
fs.appendFileSync('files/main.html', '<p>Added</p>', (err) => {
  if (err) {
    throw err
  }

  console.log('File updated')
})
console.log('After update')

console.log('Before delete')
fs.unlinkSync('files/trash.html', (err) => {
  if (err) {
    throw err
  }
  console.log('File was removed')
})
console.log('After delete')