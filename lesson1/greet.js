function greet(name) {
  return 'Hola '+ name
}

function helloWorld() {
  return 'Hola Mundo'
}

// module.exports.greet = greet
// module.exports.helloWorld = helloWorld

module.exports = {
  greet: greet,
  helloWorld: helloWorld
}
