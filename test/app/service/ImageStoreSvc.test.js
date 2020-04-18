const { app } = require('egg-mock/bootstrap')
const assert = require('assert')
// const mock = require('egg-mock')

describe('get()', () => {

  it('按时间分组获取文件大小', async () => {
    // 创建 ctx
    const ctx = app.mockContext()
    // 通过 ctx 访问到 service.user
    const imagesGroup = await ctx.service.imageStoreSvc.getGroupByDate('day', '2019-11-01', '2019-11-04', 'name', 'value')
    console.log('imagesGroup', imagesGroup)
    assert(imagesGroup)
  })

  it('按主键查询', async () => {
    // 创建 ctx
    const ctx = app.mockContext()
    // 通过 ctx 访问到 service.user
    const images = await ctx.service.imageStoreSvc.getImageByUpdatedAt('20191104')
    console.log('images', images)
    assert(images)
    // assert(user.name === 'fengmk2');
  })

  // it('should get null when user not exists', async () => {
  //     const ctx = app.mockContext();
  //     const user = await ctx.service.user.get('fengmk1');
  //     assert(!user);
  // });

})
// describe('POST /', () => {
//     it('should status 200 and get the body', () => {
//         // 对 app 发起 `GET /` 请求
//         app.mockCsrf();
//         return app.httpRequest()
//             .post('/getImages')
//             .type('form')
//             // .send({
//             //     foo: 'bar',
//             // })
//             .expect(200)
//             // .expect({
//             //     foo: 'bar',
//             // });
            
//     });
// });