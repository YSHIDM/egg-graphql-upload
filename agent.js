const schedule = require('node-schedule')
const socket = require('socket.io-client')('http://127.0.0.1:7001/chat')

module.exports = agent => {

  /**
   * 根据定时器记录设置定时器
   * @param scheduleRecord 定时器记录
   */
  const setSchedule = async scheduleRecord => {
    /**
     * cron表达式
     * 结构：秒 分 时 日 月 年
     */
    const cron = scheduleRecord.cron.join(' ')// 正式
    // let cron = ['*', '*', '*', '*', '*', '*'].join(' ');// 测试
    // 用定时器记录的 id 做定时器名字
    schedule.scheduleJob(scheduleRecord.id, cron, () => {
      agent.messenger.sendRandom('work', scheduleRecord)
    })
  }
  /**
   * 加载定时器
   * @param scheduleRecord 定时器记录
   */
  const loadSchedule = async scheduleRecord => {
    /*
     * scheduledJobs 包含了所有时间表和任务名（或type）
     */
    const job = schedule.scheduledJobs[scheduleRecord.id]
    if (job) {
      /**
       * 修改后cron表达式
       */
      const cron = scheduleRecord.cron.join(' ')// 正式
      // let cron2 = ['*/5', '*', '*', '*', '*', '*'].join(' ');// 测试
      schedule.rescheduleJob(job, cron)

    } else {
      await setSchedule(scheduleRecord)
    }
  }
  /**
   * 初始化定时器列表
   * @param ctx 上下文
   */
  const initScheduleList = async ctx => {
    const model = ctx.model.ScheduleRecord
    const scheduleRecordList = await model.findAll({ raw: true })
    scheduleRecordList.forEach(async scheduleRecord => {
      if (scheduleRecord.state) {
        await setSchedule(scheduleRecord)
      }
    })
  }
  const ctx = agent.createAnonymousContext()
  agent.ready(async () => {
    initScheduleList(ctx)
  })
  agent.messenger.on('loadSchedule', async scheduleRecord => {
    loadSchedule(scheduleRecord)
  })
  // 用定时器记录的 id 做定时器名字
  agent.messenger.on('cancelJobByName', async scheduleName => {
    schedule.cancelJob(scheduleName)
  })
  agent.messenger.on('reloadScheduleList', async () => {
    for (const jobName in schedule.scheduledJobs) {
      if (schedule.scheduledJobs.hasOwnProperty(jobName)) {
        const job = schedule.scheduledJobs[jobName]
        job.cancel()
      }
    }
    initScheduleList(ctx)
  })
  agent.messenger.on('addTodo', ()=>{
    ctx.logger.info(JSON.stringify('hello'))
    socket.emit('addTodo', 'agent')
  })
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
}