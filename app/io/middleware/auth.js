module.exports = () => {
  return async (ctx, next) => {
    const say = await ctx.service.user.say()
    // console.log('ctx.socket :>>', ctx.socket);
    ctx.socket.emit('res', 'auth!' + say)
    await next()
    console.info('disconnect!')
  }
}