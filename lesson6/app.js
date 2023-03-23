function showLesson(lesson) {
  console.log(`Currently learing ${lesson}`)
}

console.log('before')
setImmediate(showLesson, 'Node.js')
console.log('after')