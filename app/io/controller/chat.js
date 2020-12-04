module.exports = app => {
  class Controller extends app.Controller {
    /**
     * 命名空间 /
     */
    async index() {
      this.ctx.logger.info('index :>>', this.ctx.socket)
      // const message = this.ctx.args[0]
      console.info('chat :', this.ctx.socket)
      // this.ctx.socket.emit('online', 'server->client')
      // const a = await app.model.Todo.findAll().then(ds=>ds.map(d=>d.toJSON()))
      // console.log('a :>>', a);
      const b = await this.ctx.service.todoSvc.getAllTodo()
      // console.log('b :>>', b)
      this.ctx.socket.broadcast.emit('chatBack', b)
    }
    /**
     * 命名空间 /chat
     */
    async addTodo() {
      this.ctx.logger.info('123 :>>', 123)
      const message = this.ctx.args[0]
      this.ctx.logger.info('chat :', message + ' : ' + process.pid)
      const b = await this.ctx.service.todoSvc.getAllTodo()
      // this.ctx.logger.info('this.ctx.socket :>>', this.ctx.socket)
      // this.ctx.socket.broadcast.emit('chatBack', b)
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