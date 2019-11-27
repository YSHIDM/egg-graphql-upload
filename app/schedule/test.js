// const Subscription = require('egg').Subscription;
const { promises: fsp } = require('fs');

module.exports = app => {
    return {
        schedule: {
            cron: '0 * * * * *',
            type: 'all',
        },
        /**
         * append file
         * @param {*} ctx 
         * * 注意这个方法的名字
         */
        async task(ctx) {
            const min = new Date().getMinutes();
            // ctx.socket.emit('res', 'auth!' + min);
            // await fsp.appendFile(ctx.app.baseDir + '/text/b.txt', min + '\r');
            // ctx.app.cache = 'hahaha';
        },
    };
};
// class UpdateCache extends Subscription {
//     static get schedule() {
//         return {
//             // cron: '* * * * * *',
//             interval: '10s',
//             type: 'all',
//         };
//     }

//     // subscribe 是真正定时任务执行时被运行的函数
//     async subscribe(ctx) {// 注意这个方法的名字
//         console.log('hh')
//         console.log('ctx', ctx)
//         // await fsp.appendFile(ctx.app.baseDir + '/text/b.txt', Date.now());
//         // ctx.app.cache = 'hahaha';
//     };
// }

// module.exports = UpdateCache;