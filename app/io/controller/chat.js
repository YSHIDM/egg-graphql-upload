module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      console.log('234 :>>', 234)
      // const message = this.ctx.args[0]
      // console.info('chat :', message + ' : ' + process.pid)
      // this.ctx.socket.emit('online', 'server->client')
      // const a = await app.model.Todo.findAll().then(ds=>ds.map(d=>d.toJSON()))
      // console.log('a :>>', a);
      const b = await this.ctx.service.todoSvc.getAllTodo()
      // console.log('b :>>', b)
      this.ctx.socket.broadcast.emit('chatBack', b)
    }
    async chat() {
      console.log('123 :>>', 123)
      const message = this.ctx.args[0]
      console.info('chat :', message + ' : ' + process.pid)
      const b = await this.ctx.service.todoSvc.getAllTodo()
      this.ctx.socket.broadcast.emit('chatBack', b)
      // const message = this.ctx.args[0]
      // console.info('chat :', message + ' : ' + process.pid)
      // this.ctx.socket.emit('online', 'server->client')
      // // const a = await app.model.Todo.findAll().then(ds=>ds.map(d=>d.toJSON()))
      // // console.log('a :>>', a);
      // console.log('b :>>', b)
      // this.ctx.socket.emit('chatBack', b)
    }
  }
  return Controller
}