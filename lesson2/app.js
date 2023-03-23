// console.error(new Error('New error'))
// console.log(process.env)
console.log(process.argv)

const arr = process.argv

arr.forEach((o, index) => {
  if (index > 1) {
    console.log(o)
  }
})

console.log(process.memoryUsage())