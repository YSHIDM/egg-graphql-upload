const { app } = require('egg-mock/bootstrap')
const assert = require('assert')
// const mock = require('egg-mock')

describe('get()', () => {

  it('按时间分组获取文件大小', async () => {
    // 创建 ctx
    const ctx = app.mockContext()
    // 通过 ctx 访问到 service.user
    const jsonTestList = await ctx.service.jsonTestSvc.getJsonTestList({ id: '2', creator: 'ys', modifier: undefined })
    console.log('jsonTestList', jsonTestList)
    assert(jsonTestList)
  })

  // it('按主键查询', async () => {
  //     // 创建 ctx
  //     const ctx = app.mockContext();
  //     // 通过 ctx 访问到 service.user
  //     const images = await ctx.service.imageStoreSvc.getImageByUpdatedAt('20191104');
  //     console.log('images', images)
  //     assert(images);
  //     // assert(user.name === 'fengmk2');
  // });

  // it('should get null when user not exists', async () => {
  //     const ctx = app.mockContext();
  //     const user = await ctx.service.user.get('fengmk1');
  //     assert(!user);
  // });

})