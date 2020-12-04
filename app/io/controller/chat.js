module.exports = app => {
  class Controller extends app.Controller {
    /**
     * 命名空间 /
     */
    async index() {
      // const message = this.ctx.args[0]
      // const a = await app.model.Todo.findAll().then(ds=>ds.map(d=>d.toJSON()))
      const b = await this.ctx.service.todoSvc.getAllTodo()
      this.ctx.socket.broadcast.emit('chatBack', b)
    }
    /**
     * 命名空间 /chat
     */
    async addTodo() {
      const message = this.ctx.args[0]
      const b = await this.ctx.service.todoSvc.getAllTodo()
      // this.ctx.socket.broadcast.emit('chatBack', b)
      this.ctx.socket.broadcast.emit('chatBack', b)
      // const message = this.ctx.args[0]
      // this.ctx.socket.emit('online', 'server->client')
      // // const a = await app.model.Todo.findAll().then(ds=>ds.map(d=>d.toJSON()))
      // this.ctx.socket.emit('chatBack', b)
    }
  }
  return Controller
}