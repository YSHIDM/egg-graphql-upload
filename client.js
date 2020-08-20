// or http://127.0.0.1:7001/chat
const socket = require('socket.io-client')('http://127.0.0.1:7001/chat')
const {execFile} = require('./app/util/shellUtil')

socket.on('connect', () => {
  // socket.emit('chat', {
  //   receiver: 123,
  //   payload: {
  //     message: '123',
  //     message_type: 'string'
  //   }
  // })
  // setInterval(()=>socket.emit('chat', {
  //   receiver: 123,
  //   payload: {
  //     message: '123',
  //     message_type: 'string'
  //   }
  // }),5000)
})

socket.on('res', msg => {
  execFile('./shell/autoUpdate.sh', '/Users/lcy/Project/my/egg-graphql-upload/')
})
socket.send('hello')
socket.emit('chat','h哈哈 hh')
