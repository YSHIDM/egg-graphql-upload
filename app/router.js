'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/sio', controller.home.sio);
  
  router.post('/images', controller.imageStore.uploadImages);
  router.post('/deleteImage', controller.imageStore.deleteImage);
  router.post('/getImageByFK', controller.imageStore.getImageByFK);
  router.post('/getImages', controller.imageStore.getImages);
  router.post('/imagesStream', controller.imageStore.uploadStreamImage);
  router.post('/upload', controller.imageStore.uploadStreamImages);

  // app.io.of('/')
  app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  app.io.of('/chat').route('chat', app.io.controller.chat.index);
};
