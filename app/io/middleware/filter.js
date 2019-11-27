module.exports = () => {
    return async (ctx, next) => {
        console.log('packet', ctx.packet);
        const say = await ctx.service.user.say();
        ctx.socket.emit('res', 'packet!' + say);
        await next();
        console.log('packet response!');
    };
};