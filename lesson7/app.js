function showLesson(lesson) {
  console.log(`Currently learning ${lesson}`)
}

setInterval(showLesson, 2000, 'Node.js')