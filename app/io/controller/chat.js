module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0]
      console.info('chat :', message + ' : ' + process.pid)
      this.ctx.socket.emit('res', 'server->client')
    }
  }
  return Controller
}