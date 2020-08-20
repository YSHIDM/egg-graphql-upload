const io = require('socket.io-client')

let socket = io.connect('http://127.0.0.1:7001', { path: '/chat' })

socket.emit('chat', 'haha')

// socket.on('connect', socket => {
//     console.info(socket); // 'G5p5...'
//   });
socket.on('connect', function () {
  console.info('123', 123)
  socket.emit('ferret', 'tobi', function (data) {
    console.info(data) // data will be 'woot'
  })
})