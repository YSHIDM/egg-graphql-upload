const io = require('socket.io-client')

let socket = io.connect('http://127.0.0.1:7001', { path: '/chat' })

socket.emit('chat', 'haha')

// socket.on('connect', socket => {
//     console.log(socket); // 'G5p5...'
//   });
socket.on('connect', function () {
  console.log('123', 123)
  socket.emit('ferret', 'tobi', function (data) {
    console.log(data) // data will be 'woot'
  })
})