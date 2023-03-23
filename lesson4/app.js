function showLesson(lesson) {
  console.log(`I am currently learning ${lesson}`)
}

// showLesson('Node.js')
setTimeout(showLesson, 2000, 'Node.js')