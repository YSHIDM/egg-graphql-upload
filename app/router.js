'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/sio', controller.home.sio)

  router.post('/images', controller.imageStore.uploadImages)
  router.post('/deleteImage', controller.imageStore.deleteImage)
  router.post('/getImageByFK', controller.imageStore.getImageByFK)
  router.post('/getImages', controller.imageStore.getImages)
  router.post('/imagesStream', controller.imageStore.uploadStreamImage)
  router.post('/upload', controller.imageStore.uploadStreamImages)

  router.post('/download.js', controller.configFile.download)

  router.post('/restart',controller.configFile.restart)
  router.post('/testRestart',controller.configFile.testRestart)

  // app.io.of('/')
  app.io.route('addTodo', app.io.controller.chat.index)

  // app.io.of('/chat')
  app.io.of('/chat').route('addTodo', app.io.controller.chat.addTodo)
}
