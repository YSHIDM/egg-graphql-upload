module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0]
      console.info('chat :', message + ' : ' + process.pid)
      this.ctx.socket.emit('online', 'server->client')
      const a = await app.model.Todo.findAll().then(ds=>ds.map(d=>d.toJSON()))
      console.log('a :>>', a);
      this.ctx.socket.emit('chatBack', a)
      const b = await this.ctx.service.todoSvc.getAllTodo()
      console.log('b :>>', b);
    }
  }
  return Controller
}