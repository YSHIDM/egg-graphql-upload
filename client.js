// or http://127.0.0.1:7001/chat
const socket = require('socket.io-client')('http://127.0.0.1:12345')

socket.on('connect', () => {
  console.log('connect!')
  socket.emit('chat', {
    receiver: 123,
    payload: {
      message: '123',
      message_type: 'string'
    }
  })
  setInterval(()=>socket.emit('chat', {
    receiver: 123,
    payload: {
      message: '123',
      message_type: 'string'
    }
  }),5000)
})

socket.on('res', msg => {
  console.log('res from server: %s!', msg)
})